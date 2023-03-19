<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    let canvas: HTMLElement;
    let mouse = new THREE.Vector2();

    let raycaster = new THREE.Raycaster();
    let pointer = new THREE.Vector2();

    let idleActions: THREE.AnimationAction[];
    let fallActions: THREE.AnimationAction[];

    function onMouseMove(event: MouseEvent) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }

    onMount(() => {
        canvas.addEventListener('click', onClick, false);

        let mixer: THREE.AnimationMixer;
        const clock = new THREE.Clock();

        // Create renderer.
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
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
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const loader = new GLTFLoader();
        loader.load('./bot.glb', (gltf) => {
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

        window.onresize = function () {
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

<div on:mousemove={onMouseMove} class="flex flex-row">
    <div class="basis-1/2 ml-24 mr-2 my-6 p-4">
        <canvas bind:this={canvas} class="h-full w-full" id="canvas"/>
    </div>
    <div class="basis-1/2 ml-2 mr-24 my-6 p-4">
        <div class="flex flex-col">
            <h2 class="font-mont text-2xl mb-1.5">Machine Learning & Deep Learning</h2>
            <div class="text-base">Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models.
            </div>
        </div>
    </div>
</div>