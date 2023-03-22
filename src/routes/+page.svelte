<script lang="ts">
    
    import { onMount } from 'svelte';
    import RobotCanvas from '../lib/RobotCanvas.svelte';
    import { Vector2 } from 'three';

    let mouse = new Vector2();

    function onMouseMove(event: MouseEvent) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }

    function scrollToSection(sectionID: string) {

        const section = document.getElementById(sectionID)!;
        const sectionTop = section.offsetTop;

        console.log("Button clicked: " + sectionTop);

        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        })
    }

</script>

<div on:mousemove={onMouseMove}>
    <nav class="bg-gray-800 py-3 px-4">
        <div class="flex items-center justify-between">
            <a href="/" class="text-white">Jure Vito Srovin</a>

            <div class="flex items-center">
                <button on:click={() => {scrollToSection('interests')}} class="text-gray-400 hover:text-white mx-4">Interests</button>
                <button on:click={() => {scrollToSection('experiences')}} class="text-gray-400 hover:text-white mx-4">Experiences</button>
                <button on:click={() => {scrollToSection('contact')}} class="text-gray-400 hover:text-white mx-4">Contact</button>
            </div>
        </div>
    </nav>


    <h2 id="interests" class="text-4xl text-center m-4 mt-8">Interests</h2>
    <div class="flex flex-row">
        <div class="basis-1/2 ml-24 mr-2 my-2 p-3">
            <RobotCanvas mouse={mouse}/>
        </div>
        <div class="basis-1/2 ml-2 mr-24 my-2 p-3">
            <div class="flex flex-col">
                <h2 class="font-mont text-2xl mb-1.5">Machine Learning & Deep Learning</h2>
                <div class="text-base">Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models.
                </div>
            </div>
        </div>
    </div>

    <h2 id="experiences" class="text-4xl text-center m-4 mt-8">Experiences</h2>
    <p class="mx-16 my-4">Lorem ipsum</p>

    <h2 id="contact" class="text-4xl text-center m-4 mt-8">Contact</h2>
    <p class="mx-16 my-4">Lorem ipsum</p>
</div>