<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

    onMount(() => {

        let mixer: THREE.AnimationMixer;
        const clock = new THREE.Clock();

        const canvas: HTMLElement = document.querySelector('#canvas')!;

        // Create renderer.
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
	    renderer.setPixelRatio(window.devicePixelRatio);
	    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.shadowMap.enabled = true;
	    renderer.outputEncoding = THREE.sRGBEncoding;

        // Create scene.
        const scene = new THREE.Scene();

        // Create a new camera.
        const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 1, 100);
		camera.position.set(-4, 1, 5);

        // Create a directional light.
        const directLight = new THREE.DirectionalLight(0xffffff);
	    directLight.position.set(3, 10, 10);
        directLight.castShadow = true;
        scene.add(directLight);

        // Create an ambient light.
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);
        
        // Create controls.
        const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 0.5, 0);
		controls.update();
		controls.enablePan = true;
		controls.enableDamping = true;

        const loader = new GLTFLoader();
        loader.load('./bot.glb', (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);
            console.log("Number of animations: " + gltf.animations.length);

            const idleActions = [gltf.animations[0], gltf.animations[4], gltf.animations[5]];
            const fallActions = [gltf.animations[1], gltf.animations[3]];

            idleActions.forEach((animation) => {
                mixer.clipAction(animation).play();
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

            controls.update();
            renderer.render(scene, camera);
        }
    });
</script>

<div class="flex flex-row">
    <div id="container" class="basis-1/2 bg-blue-200 ml-32 mr-2 my-6 p-4">
        <canvas class="h-full w-full" id="canvas"/>
    </div>
    <div class="basis-1/2 bg-red-200 ml-2 mr-32 my-6 p-4">
        <div class="flex flex-col">
            <h2 class="font-mont text-2xl mb-1.5">Machine Learning & Deep Learning</h2>
            <div class="text-base">Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models.
            </div>
        </div>
    </div>
</div>