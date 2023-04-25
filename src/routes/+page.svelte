<script lang="ts">
    import { onMount } from 'svelte';
    import RobotCanvas from '../lib/RobotCanvas.svelte';
    import { Vector2 } from 'three';
    import { exps } from '../lib/Experience';
	import GiantCanvas from '$lib/GiantCanvas.svelte';

    let mouse = new Vector2();
    let robotContainer: HTMLDivElement;
    let giantContainer: HTMLDivElement;

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

    let expandButton: HTMLButtonElement;
    let sectionButtons: HTMLDivElement;

    function toggleMenu() {
        sectionButtons.classList.toggle('h-0')
        sectionButtons.classList.toggle('h-36')
    }

</script>

<div on:mousemove={onMouseMove}>

    <!-- Navigation -->
    <nav class="bg-gray-800 py-3 px-4 shadow-lg shadow-gray-400">
        <div class="flex flex-col sm:flex-row items-center justify-between font-mont font-bold max-w-3xl mx-auto">
            <div class="flex items-center justify-between w-full">
                <p class="text-gray-200">Jure Vito Srovin</p>
                <button bind:this={expandButton} on:click={toggleMenu} id="expand-btn" class="px-2 text-gray-300 hover:text-white sm:hidden">
                    <i class="flex fa-solid fa-bars"></i>
                </button>
            </div>

            <div bind:this={sectionButtons} id="section-btns" class="flex w-full h-0 sm:h-auto transition-all duration-10 overflow-hidden sm:overflow-visible justify-evenly items-center flex-col sm:flex-row">
                <button on:click={() => {scrollToSection('interests')}} class="text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white">Interests</button>
                <button on:click={() => {scrollToSection('experience')}} class="text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-blue-500 to-violet-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white">Experience</button>
                <button on:click={() => {scrollToSection('contact')}} class="text-gray-400 mx-4 py-0.5 bg-gradient-to-r from-fuchsia-500 to-rose-500 bg-[length:0%_0.15em] hover:bg-[length:100%_0.15em] bg-bottom bg-no-repeat transition-all duration-150 ease-in-out hover:text-white">Contact</button>
            </div>
        </div>
    </nav>

    <div class="max-w-3xl w-4/5 mx-auto my-12">

        <!-- Interests -->
        <div class="my-8">
            <h2 id="interests" class="font-mont font-semibold text-4xl text-center m-2">Interests</h2>
            <div class="group flex flex-col my-10 sm:flex-row group">
                <div bind:this={robotContainer} class="basis-3/5 overflow-hidden">
                    <RobotCanvas mouse={mouse} parent={robotContainer}/>
                </div>
                <div class="basis-2/5">
                    <div class="flex flex-col">
                        <h2 class="font-mont text-2xl my-2 mx-auto text-center pb-1 bg-gradient-to-r from-red-500 to-amber-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]">Machine Learning</h2>
                        <div>Why program business logic when you can let computer learn it himself. I used machine learning in many university assignments as well as in my bachelor's thesis with title: Machine Learning on Medical Data Using Interpretable Models.
                        </div>
                    </div>
                </div>
            </div>

            <div class="group flex flex-col my-10 sm:flex-row-reverse">
                <div bind:this={giantContainer} class="basis-3/5 overflow-hidden">
                    <GiantCanvas mouse={mouse} parent={robotContainer}/>
                </div>
                <div class="basis-2/5">
                    <div class="flex flex-col">
                        <h2 class="font-mont text-2xl my-2 mx-auto text-center pb-1 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-[length:0%_0.1em] bg-left-bottom bg-no-repeat duration-500 transition-size ease-in-out no-underline group-hover:bg-[length:100%_0.1em]">Computer Graphics</h2>
                        <div>Before pursuing computer science, I wanted to work as a 3D artist. Since computer science program offered a 3D modeling course in the third year of the bachelor's degree, I made the decision to enroll in the program.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Experience -->
        <div class="my-8">
            <h2 id="experience" class="font-mont font-semibold text-4xl text-center m-2">Experience</h2>
            {#each exps as exp}
            <div class="text-center my-12">
                <div class="text-gray-800 text-xl font-semibold">{exp.position}</div>
                <div class="text-gray-800 text-lg italic">{exp.company} • {exp.type}</div>
                <div class="text-gray-500 text-sm">{exp.from.toLocaleString('default', { month: 'short', year: 'numeric' })} - {exp.until.toLocaleString('default', { month: 'short', year: 'numeric' })}</div>
                <div class="text-gray-500 text-sm">{exp.city}, {exp.country}</div>
                <div class="text-gray-800 text-sm font-semibold">{exp.skills.join(' • ')}</div>
            </div>
            {/each}
        </div>

        <!-- Contact -->
        <div class="my-8">
            <h2 id="contact" class="font-mont font-semibold text-4xl text-center m-2">Contact</h2>
            <div class="flex flex-col my-5 sm:flex-row">
                <div class="basis-1/2 flex items-center justify-center my-5">
                    <img class="rounded-full w-2/3" alt="profile" src="pics/me.jpg">
                </div>
                <div class="basis-1/2 my-5">

                    <!-- Description -->
                    <div>My name is <span>Jure Vito Srovin</span> and I am {age} years old student at the Faculty of Computer and Information Science in Ljubljana. 
                        Currently I am working on my master's thesis titled
                        <span class="italic">"Simulation of molecular docking using deep learning"</span>.
                        My hobbies include 3D modeling, lifting weights and traveling.
                    </div>

                    <!-- Contact Icons -->
                    <div class="flex flex-row text-center mt-6">
                        <div class="basis-1/3 flex items-center justify-center">
                            <a class="py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-slate-600 to-zinc-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]" href="https://www.github.com/jurevito" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-github w-[1em] h-[1em]"></i> GitHub
                            </a>
                        </div>
                        <div class="basis-1/3 flex items-center justify-center">
                            <a class="py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-blue-500 to-cyan-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]" href="https://www.linkedin.com/in/jure-vito-srovin-587746245" target="_blank" rel="noreferrer">
                                <i class="fa-brands fa-linkedin w-[1em] h-[1em]"></i> LinkedIn
                            </a>
                        </div>
                        <div class="basis-1/3 flex items-center justify-center">
                            <a class="py-1 bg-bottom bg-no-repeat duration-200 ease-in-out bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-[length:0%_0.15em] transition-size hover:bg-[length:100%_0.15em]" href="mailto:jure.vito@gmail.com" target="_blank" rel="noreferrer">
                                <i class="fa-solid fa-inbox w-[1em] h-[1em]"></i> Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>