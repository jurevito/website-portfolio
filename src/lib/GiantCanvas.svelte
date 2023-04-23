<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

    let canvas: HTMLElement;

    let raycaster = new THREE.Raycaster();
    let pointer = new THREE.Vector2();

    let idleAction: THREE.AnimationAction;
    let attackAction: THREE.AnimationAction;

    onMount(() => {
        canvas.addEventListener('click', onClick);

        let mixer: THREE.AnimationMixer;
        const clock = new THREE.Clock();

        // Create renderer.
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.shadowMap.enabled = true;
        renderer.outputEncoding = THREE.sRGBEncoding;

        // Create scene.
        const scene = new THREE.Scene();

        // Create a new camera.
        const camera = new THREE.PerspectiveCamera(20, canvas.clientWidth / canvas.clientHeight, 1, 100);
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

            const model = gltf.scene;
            scene.add(model);

            console.log(gltf.animations);
            mixer = new THREE.AnimationMixer(model);

            // Play boat animations.
            [gltf.animations[0], gltf.animations[1], gltf.animations[2]].forEach((animation) => {
                mixer.clipAction(animation).play();
            });

            idleAction = mixer.clipAction(gltf.animations[4]);
            attackAction = mixer.clipAction(gltf.animations[3]);

            attackAction.setLoop(THREE.LoopOnce, 1);
            attackAction.clampWhenFinished = true;

            idleAction.play();

            animate();
        }, undefined, (e: ErrorEvent) => {
            console.error(e);
        });

        window.onresize = () => {
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        };
        
        function animate() {
            requestAnimationFrame(animate);

            // scene.rotation.y += 0.01;
            const delta = clock.getDelta();
            mixer.update( delta );

            renderer.render(scene, camera);
        }

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
