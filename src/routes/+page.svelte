<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
    
    let innerWidth: number;
    let innerHeight: number;

    const scene = new THREE.Scene();

    // Create a light source.
    let light = new THREE.SpotLight();
    light.position.z = 5;
    scene.add(light);
  
    onMount(() => {

        let loadedModel: THREE.Mesh;

        // Load an exported model.
        const loader = new GLTFLoader();
        loader.load('./fox.glb', (gltf) => {
            loadedModel = gltf.scene.getObjectByName('Cube')! as THREE.Mesh;
            scene.add(loadedModel);
        }, undefined, (error: any) => {
            console.error(error);
        });
        
        // Create a new Camera
        let camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const canvas = document.querySelector('#canvas')!;
        
        // Create a new Renderer
        const renderer = new THREE.WebGLRenderer({ 
            canvas, 
            alpha: true, 
            antialias: true 
        });
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        
        // Render the scene
        function animate() {
            requestAnimationFrame(animate);
        
            loadedModel.rotation.y += 0.01;

            let color = loadedModel.material.color.getHex();
            loadedModel.material.color.setHex(color + 258);

            renderer.render(scene, camera);
        }

        animate();
    });
</script>


<svelte:window bind:innerWidth={innerWidth} bind:innerHeight={innerHeight}/>

<h1>Welcome to SvelteKit</h1>
<p class="text-teal-500">Tailwind is working</p>
<canvas class="w-screen" id="canvas"/>