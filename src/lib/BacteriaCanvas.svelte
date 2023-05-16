<script lang="ts">
    
    import { onMount } from 'svelte';
    import * as THREE from 'three';
    import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

    export let parent: HTMLDivElement;
    let canvas: HTMLElement;

    let actions: THREE.AnimationAction[];

    const maxHeight = 300;
    let currentWidth = 1000;

    onMount(() => {
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
        const camera = new THREE.PerspectiveCamera(15, canvas.clientWidth / maxHeight, 1, 100);
        camera.position.set(0, 0, 18);
        camera.lookAt(0, 0, 0);

        // Create a directional light.
        const directLight = new THREE.DirectionalLight(0xffffff);
        directLight.position.set(2, 7, 7);
        directLight.castShadow = true;
        scene.add(directLight);

        // Create an ambient light.
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const loader = new GLTFLoader();
        loader.load('./models/bacteria.glb', (gltf) => {

            const model = gltf.scene;
            console.log(gltf.scene)
            scene.add(model);

            const mesh = gltf.scene.getObjectByName('BacteriaBodyLowPoly') as THREE.Mesh;
            console.log(mesh);

            mixer = new THREE.AnimationMixer(model);
            
            // Virus animations: 5, 4, 3, 2
            // Tail: 1
            // Mouth: 0
            gltf.animations.forEach((animation) => {
                mixer.clipAction(animation).play();
            });

            animate();
        }, undefined, (e: ErrorEvent) => {
            console.error(e);
        });
        
        function animate() {
            requestAnimationFrame(animate);

            // Update animations.
            const delta = clock.getDelta();
            mixer.update( delta );

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
    });
</script>

<canvas bind:this={canvas} class="h-full w-full"/>
