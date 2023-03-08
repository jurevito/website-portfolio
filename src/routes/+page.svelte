<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    //import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
  
    onMount(() => {

        let mixer: THREE.AnimationMixer;
        const clock = new THREE.Clock();

        const canvas: HTMLElement = document.querySelector('#canvas')!;
        const container: HTMLElement = document.querySelector('.container')!;

        // Create renderer.
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
	    renderer.setPixelRatio( window.devicePixelRatio );
	    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
	    renderer.outputEncoding = THREE.sRGBEncoding;

        // Create scene.
        const scene = new THREE.Scene();
		//scene.background = new THREE.Color(0xbfe3dd);

        // Create a new camera.
        const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 1, 100);
		camera.position.set(3, 1, 4);

        // Create a directional light.
        const directLight = new THREE.DirectionalLight(0xffffff);
	    directLight.position.set(3, 10, 10);
        scene.add(directLight);
        
        // Create controls.
        const controls = new OrbitControls(camera, renderer.domElement);
		controls.target.set(0, 0.5, 0);
		controls.update();
		controls.enablePan = true;
		controls.enableDamping = true;

        //const dracoLoader = new DRACOLoader();
		//dracoLoader.setDecoderPath('TODO');

        const loader = new GLTFLoader();
		//loader.setDRACOLoader(dracoLoader);

        loader.load('./bot.glb', (gltf) => {
            const model = gltf.scene;
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);
            console.log("Number of animations: " + gltf.animations.length);

            gltf.animations.forEach((animation) => {
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
    <div id="container" class="basis-1/2 ml-16 mr-2 my-6 p-4">
        <canvas class="h-full w-full" id="canvas"/>
    </div>
    <div class="basis-1/2 bg-cyan-100 ml-2 mr-16 my-6 p-4">
        <div class="flex flex-col">
            <h2 class="font-mont text-2xl mb-1.5">This Should Be a Fox</h2>
            <div class="text-base">But it is not. That is because I am bad at 3D modeling
                and so this fox now looks like german sheppard made from clay.
            </div>
        </div>
    </div>
</div>