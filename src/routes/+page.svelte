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

    let expandNav: boolean = false;

    function expandMenu() {
        console.log('Expending the menu.');
    }

</script>

<div on:mousemove={onMouseMove}>

    <!-- Navigation -->
    <nav class="bg-gray-800 py-3 px-4">
        <div class="flex flex-col sm:flex-row items-center justify-between">
            <div class="flex items-center justify-between w-full">
                <a href="/" class="text-gray-300">Jure Vito Srovin</a>
                <button on:click={expandMenu} class="px-2 text-gray-300 hover:text-white sm:hidden">
                    <i class="flex fa-solid fa-bars"></i>
                </button>
            </div>

            <div class="sm:flex hidden items-center flex-col sm:flex-row">
                <button on:click={() => {scrollToSection('interests')}} class="text-gray-300 hover:text-white mx-4 my-2 sm:my-0">Interests</button>
                <button on:click={() => {scrollToSection('experience')}} class="text-gray-300 hover:text-white mx-4 my-2 sm:my-0">Experience</button>
                <button on:click={() => {scrollToSection('contact')}} class="text-gray-300 hover:text-white mx-4 my-2 sm:my-0">Contact</button>
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
                    <h2 class="font-mont delay-75 text-2xl my-2 mx-auto text-center p-1 bg-gradient-to-r from-red-500 to-amber-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em] group-active:bg-[length:100%_0.1em]">Machine Learning</h2>
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
                    <h2 class="font-mont delay-75 text-2xl my-2 mx-auto text-center p-1 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]">Computer Graphics</h2>
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

                <!-- Description -->
                <div class="text-base">I am {age} years old student at the Faculty of Computer and Information Science in Ljubljana. 
                    Currently I am currently doing my master's thesis titled
                    <span class="italic">"Simulation of molecular docking using deep learning"</span>.
                    My hobbies include 3D modeling, lifting weights and traveling.
                </div>

                <!-- Contact Icons -->
                <div class="flex flex-row text-center mx-auto my-8 max-w-4xl">
                    <div class="basis-1/3 flex items-center justify-center">
                        <a class="p-1 bg-left-bottom bg-no-repeat duration-500 ease-in-out bg-gradient-to-r from-slate-600 to-zinc-500 bg-[length:0%_0.11em] transition-size hover:bg-[length:100%_0.11em]" href="https://www.github.com/jurevito" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-github w-[1em] h-[1em]"></i> GitHub
                        </a>
                    </div>
                    <div class="basis-1/3 flex items-center justify-center">
                        <a class="p-1 bg-left-bottom bg-no-repeat duration-500 ease-in-out bg-gradient-to-r from-blue-500 to-cyan-500 bg-[length:0%_0.11em] transition-size hover:bg-[length:100%_0.11em]" href="https://www.linkedin.com/in/jure-vito-srovin-587746245" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin w-[1em] h-[1em]"></i> LinkedIn
                        </a>
                    </div>
                    <div class="basis-1/3 flex items-center justify-center">
                        <a class="p-1 bg-left-bottom bg-no-repeat duration-500 ease-in-out bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-[length:0%_0.11em] transition-size hover:bg-[length:100%_0.11em]" href="mailto:jure.vito@gmail.com" target="_blank" rel="noreferrer">
                            <i class="fa-solid fa-inbox w-[1em] h-[1em]"></i> Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>