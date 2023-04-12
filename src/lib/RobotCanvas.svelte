<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

    export let mouse = new THREE.Vector2();
    export let parent: HTMLDivElement;
    let canvas: HTMLCanvasElement;

    let raycaster = new THREE.Raycaster();
    let pointer = new THREE.Vector2();

    let idleActions: THREE.AnimationAction[];
    let fallActions: THREE.AnimationAction[];

    onMount(() => {
        canvas.addEventListener('click', onClick, false);

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
        const camera = new THREE.PerspectiveCamera(30, canvas.clientWidth / canvas.clientHeight, 1, 100);
        camera.position.set(-4, 1.5, 6);
        camera.lookAt(0, 0.25, 0);

        // Create a directional light.
        const directLight = new THREE.DirectionalLight(0xffffff);
        directLight.position.set(3, 10, 10);
        directLight.castShadow = true;
        scene.add(directLight);

        // Create an ambient light.
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
        scene.add(ambientLight);

        // Add shadow catcher.
        const catcherPlane = new THREE.PlaneGeometry(15, 15);
        const catcherMaterial = new THREE.ShadowMaterial({ color: 0x000000, opacity: 0.5 });
        const shadowCather = new THREE.Mesh(catcherPlane, catcherMaterial);
        shadowCather.receiveShadow = true;
        shadowCather.rotation.x = -Math.PI/2;
        shadowCather.position.y = -1.09;
        scene.add(shadowCather);
        
        const loader = new GLTFLoader();
        loader.load('./models/bot.glb', (gltf) => {
            
            gltf.scene.traverse((node) => {
                if (node.isObject3D) { 
                    node.castShadow = true; 
                }
            });

            const model = gltf.scene;
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);

            idleActions = [gltf.animations[0], gltf.animations[4], gltf.animations[5]].map((animation) => {
                let action = mixer.clipAction(animation);
                return action;
            });

            fallActions = [gltf.animations[1], gltf.animations[3]].map((animation) => {
                let action = mixer.clipAction(animation);
                action.setLoop(THREE.LoopOnce, 1);
                action.clampWhenFinished = true;
                return action;
            });

            idleActions.forEach((animation) => {
                animation.play();
            });

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
                idleActions.forEach((animation) => {
                    animation.stop();
                });

                mixer.timeScale = 1.5;
                fallActions.forEach((animation) => {
                    animation.play();
                });

                const onFinish = () => {

                    mixer.timeScale = 1;
                    fallActions.forEach((animation) => {
                        animation.stop();
                    });

                    idleActions.forEach((animation) => {
                        animation.play();
                    });
                };

                mixer.addEventListener("finished", onFinish);
            }
        }   
    });
</script>

<canvas bind:this={canvas} class="h-full w-full"/>
