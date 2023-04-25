<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    import GSAP from "gsap";

    export let mouse = new THREE.Vector2();
    export let parent: HTMLDivElement;
    let canvas: HTMLElement;

    let raycaster = new THREE.Raycaster();
    let pointer = new THREE.Vector2();

    let idleAction: THREE.AnimationAction;
    let attackAction: THREE.AnimationAction;

    let timePassed = 0;
    let seaMesh: THREE.Mesh;

    const maxHeight = 300;
    let currentWidth = 1000;

    let lerp = {
        current: 0,
        target: 0,
        ease: 0.1,
    };

    $: {
        const coeff = 0.05;
        lerp.target = (2*mouse.x / currentWidth - 1) * coeff;
    }

    onMount(() => {
        canvas.addEventListener('click', onClick);
        window.addEventListener('resize', handleResize);
        currentWidth = window.innerWidth;

        let mixer: THREE.AnimationMixer;
        const clock = new THREE.Clock();

        // Create renderer.
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvas.clientWidth, maxHeight);
        renderer.shadowMap.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        // Create scene.
        const scene = new THREE.Scene();

        // Create a new camera.
        const camera = new THREE.PerspectiveCamera(20, canvas.clientWidth / maxHeight, 1, 100);
        camera.position.set(-18, 12, -18);
        camera.lookAt(0, 1, 0);

        // Create a directional light.
        const directLight = new THREE.DirectionalLight(0xffffff);
        directLight.position.set(-2, 8, -5);
        directLight.castShadow = true;
        scene.add(directLight);

        // Create an ambient light.
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);
        
        const loader = new GLTFLoader();
        loader.load('./models/giant.glb', (gltf) => {
            
            gltf.scene.traverse((node) => {
                if (node.isObject3D) {
                    if (node.name == 'Giant') {
                        node.castShadow = true;
                    } else {
                        node.receiveShadow = true;
                    }
                }
            });

            // Setup sea animation shape keys.
            seaMesh = gltf.scene.getObjectByName('Cube003') as THREE.Mesh;
            seaMesh.morphTargetInfluences = [0];

            const model = gltf.scene;
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);

            // Play boat animations.
            [gltf.animations[0], gltf.animations[1], gltf.animations[2]].forEach((animation) => {
                mixer.clipAction(animation).play();
            });

            idleAction = mixer.clipAction(gltf.animations[4]);
            attackAction = mixer.clipAction(gltf.animations[5]);

            attackAction.setLoop(THREE.LoopOnce, 1);
            attackAction.clampWhenFinished = true;

            idleAction.play();

            animate();
        }, undefined, (e: ErrorEvent) => {
            console.error(e);
        });
        
        function animate() {
            requestAnimationFrame(animate);

            // Update animations.
            const delta = clock.getDelta();
            mixer.update( delta );

            const weight = Math.abs(Math.sin(timePassed) * 0.5 + 0.5);
            timePassed += delta*5;

            // Animate sea mesh with shape keys.
            if (seaMesh.morphTargetInfluences !== undefined) {
                seaMesh.morphTargetInfluences[0] = weight;
            }

            lerp.current = GSAP.utils.interpolate(
                lerp.current,
                lerp.target,
                lerp.ease
            );

            // Rotate scene on mouse move.
            scene.rotation.y = lerp.current;

            renderer.render(scene, camera);
        }

        function handleResize() {
            const width = parent.clientWidth;
            const height = Math.min(width, maxHeight);

            camera.aspect = width / height;
            camera.updateProjectionMatrix();

            renderer.setSize(width, height);
            currentWidth = window.innerWidth;
        };

        function onClick(event: MouseEvent) {
            let bounds = renderer.domElement.getBoundingClientRect();
            pointer.x = ((event.clientX - bounds.left) / (bounds.right - bounds.left)) * 2 - 1;
            pointer.y = -((event.clientY - bounds.top) / (bounds.bottom - bounds.top)) * 2 + 1;

            raycaster.setFromCamera(pointer, camera);
            let intersects = raycaster.intersectObjects(scene.children, true);
            
            if(intersects.length > 0) {

                idleAction.stop();
                attackAction.play();

                const onFinish = () => {
                    attackAction.stop();
                    idleAction.play();
                };

                mixer.addEventListener("finished", onFinish);
            }
        }
    });
</script>

<canvas bind:this={canvas} class="h-full w-full"/>
