<script lang="ts">
    
    import { onMount } from 'svelte';
    import RobotCanvas from '../lib/RobotCanvas.svelte';
    import { Vector2 } from 'three';
    import { exps } from '../lib/Experience';
	import GiantCanvas from '$lib/GiantCanvas.svelte';

    let mouse = new Vector2();
    let robotContainer: HTMLDivElement;

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
                <button on:click={() => {scrollToSection('experience')}} class="text-gray-400 hover:text-white mx-4">Experience</button>
                <button on:click={() => {scrollToSection('contact')}} class="text-gray-400 hover:text-white mx-4">Contact</button>
            </div>
        </div>
    </nav>

    <!-- Interests -->
    <div class="mx-8 my-8">
        <h2 id="interests" class="font-mont font-semibold text-4xl text-center m-2 p-2">Interests</h2>
        <div class="group flex flex-col my-10 max-w-4xl mx-auto sm:flex-row group">
            <div bind:this={robotContainer} class="basis-3/5">
                <RobotCanvas mouse={mouse} parent={robotContainer}/>
            </div>
            <div class="basis-2/5">
                <div class="flex flex-col">
                    <h2 class="font-mont w-fit text-2xl my-2 mx-auto text-center p-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em] group-active:bg-[length:100%_0.1em]">Machine Learning</h2>
                    <div class="text-base">Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models.
                    </div>
                </div>
            </div>
        </div>

        <div class="group flex flex-col my-10 max-w-4xl mx-auto sm:flex-row-reverse">
            <div class="basis-3/5">
                <GiantCanvas/>
            </div>
            <div class="basis-2/5">
                <div class="flex flex-col">
                    <h2 class="font-mont w-fit text-2xl my-2 mx-auto text-center p-1 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]">Computer Graphics</h2>
                    <div class="text-base">Before pursuing computer science, I wanted to work as a 3D artist. Since computer science program offered a 3D modeling course in the third year of the bachelor's degree, I made the decision to enroll in the program.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Experience -->
    <div class="mx-8 my-8">
        <h2 id="experience" class="font-mont font-semibold text-4xl text-center m-4 mt-8">Experience</h2>
        {#each exps as exp}
        <div class="text-center mx-16 my-4 p-4">
            <div class="text-gray-800 text-xl font-semibold">{exp.position}</div>
            <div class="text-gray-800 text-lg italic">{exp.company} • {exp.type}</div>
            <div class="text-gray-500 text-sm">{exp.from.toLocaleString('default', { month: 'short', year: 'numeric' })} - {exp.until.toLocaleString('default', { month: 'short', year: 'numeric' })}</div>
            <div class="text-gray-500 text-sm">{exp.city}, {exp.country}</div>
            <div class="text-gray-800 text-sm font-semibold">{exp.skills.join(' • ')}</div>
        </div>
        {/each}
    </div>

    <!-- Contact -->
    <div class="mx-8 my-8">
        <h2 id="contact" class="font-mont font-semibold text-4xl text-center m-4 mt-8">Contact</h2>
        <div class="flex flex-col my-5 mx-auto max-w-4xl sm:flex-row">
            <div class="basis-1/2 flex items-center justify-center my-5">
                <img class="rounded-full w-2/3" alt="profile" src="pics/me.jpg">
            </div>
            <div class="basis-1/2 my-5">
                <div class="text-base">I am {age} years old student at the Faculty of Computer and Information Science in Ljubljana. 
                    Currently I am currently doing my master's thesis with title 
                    <span class="italic">"Simulation of molecular docking using deep learning"</span>.
                    My hobbies include 3D modeling, lifting weights and traveling.
                </div>
            </div>
        </div>
        <div class="flex flex-row text-center mx-auto max-w-4xl">
            <div class="basis-1/3 flex items-center justify-center">
                <a href="https://www.github.com/jurevito" target="_blank" rel="noreferrer">
                    <img class="w-12 h-12 opacity-90 hover:opacity-70" alt="github" src="icons/icon-github.svg">
                </a>
            </div>
            <div class="basis-1/3 flex items-center justify-center">
                <a href="https://www.linkedin.com/in/jure-vito-srovin-587746245" target="_blank" rel="noreferrer">
                    <img class="w-12 h-12 opacity-90 hover:opacity-70" alt="linkedin" src="icons/icon-linkedin.svg">
                </a>
            </div>
            <div class="basis-1/3 flex items-center justify-center">
                <a href="https://www.github.com/jurevito" target="_blank" rel="noreferrer">
                    <img class="w-12 h-12 opacity-90 hover:opacity-70" alt="mail" src="icons/icon-mail.svg">
                </a>
            </div>
        </div>
    </div>
</div>