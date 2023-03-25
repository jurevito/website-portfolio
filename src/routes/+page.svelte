<script lang="ts">
    
    import { onMount } from 'svelte';
    import RobotCanvas from '../lib/RobotCanvas.svelte';
    import { Vector2 } from 'three';
    import { exps } from '../lib/Experience';

    let mouse = new Vector2();

    // Find my current age.
    const today = new Date().getTime();
    const birthdate = new Date('1998-06-25').getTime();
    const diffInMs = Math.abs(today - birthdate)
    const age = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

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

    <!-- Navigation -->
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

    <!-- Interests -->
    <h2 id="interests" class="font-mont font-semibold text-4xl text-center m-4 mt-8">Interests</h2>
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

    <!-- Experiences -->
    <h2 id="experiences" class="font-mont font-semibold text-4xl text-center m-4 mt-8">Experiences</h2>
    {#each exps as exp}
    <div class="text-center mx-16 my-4 p-4">
        <div class="text-gray-800 text-xl font-semibold">{exp.position}</div>
        <div class="text-gray-800 text-lg italic">{exp.company} • {exp.type}</div>
        <div class="text-gray-500 text-sm">{exp.from.toLocaleString('default', { month: 'short', year: 'numeric' })} - {exp.until.toLocaleString('default', { month: 'short', year: 'numeric' })}</div>
        <div class="text-gray-500 text-sm">{exp.city}, {exp.country}</div>
        <div class="text-gray-800 text-sm font-semibold">{exp.skills.join(' • ')}</div>
    </div>
    {/each}

    <!-- Contact -->
    <h2 id="contact" class="font-mont font-semibold text-4xl text-center m-4 mt-8">Contact</h2>
    <div class="flex flex-row">
        <div class="basis-1/3 ml-24 mr-2 my-3 p-3">
            <img class="rounded-full w-2/3" alt="profile" src="profile-pic.png">
        </div>
        <div class="basis-2/3 ml-2 mr-24 my-3 p-3">
            <div class="text-base">I am {age} years old student at the Faculty of Computer and Information Science in Ljubljana. 
                Currently I am currently doing my master's thesis with title 
                <span class="italic">"Simulation of molecular docking using deep learning"</span>.
                My hobbies include 3D modeling, lifting weights and traveling.
            </div>
        </div>
    </div>
</div>