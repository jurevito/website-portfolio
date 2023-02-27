<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    
    let innerWidth: number;
    let innerHeight: number;

    const scene = new THREE.Scene();

    // Create a light source.
    let light = new THREE.SpotLight(undefined, 2.5);
    light.position.z = 10;
    scene.add(light);
  
    onMount(() => {

        // Create a new Camera
        let camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 1000);
        camera.position.z = 6;

        const canvas = document.querySelector('#canvas')!;
        
        // Create a new Renderer
        const renderer = new THREE.WebGLRenderer({ 
            canvas, 
            alpha: true, 
            antialias: true 
        });
        renderer.setSize(canvas.clientWidth*1.3, canvas.clientHeight*1.3);

        let loadedModel: THREE.Object3D | undefined;

        // Load an exported model.
        const loader = new GLTFLoader();
        loader.load('./fox.glb', (gltf) => {

            loadedModel = gltf.scene.getObjectByName('Cube');

            if (loadedModel) {
                scene.add(loadedModel);
            }
        }, undefined, (error: ErrorEvent) => {
            console.error(error);
        });
        
        // Render the scene
        function animate() {
            requestAnimationFrame(animate);
        
            if (loadedModel) {
                loadedModel.rotation.y += 0.02;
            }

            renderer.render(scene, camera);
        }

        animate();
        
    });
</script>


<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>

<div class="flex flex-row">
    <div class="basis-1/2 ml-4 mr-2 my-6 p-4">
        <canvas id="canvas"/>
    </div>
    <div class="basis-1/2 ml-2 mr-4 my-6 p-4">
        <div class="flex flex-col">
            <h2 class="font-mont text-2xl mb-1.5">This Should Be a Fox</h2>
            <div class="text-base">But it is not. That is because I am bad at 3D modeling
                and so this fox now looks like german sheppard made from clay.
            </div>
        </div>
    </div>
</div>