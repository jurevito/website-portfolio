interface Project {
    title: string,
    description: string,

    photo: string,
    alt: string,
    github: string
    skills: string[],
}

const projects: Project[] = [
    {
        title: 'YouTube to MP3 Converter',
        description: 'I created YouTube to MP3 terminal UI application in Go programming language. It also allows you to edit music metadata such as artist and song title.',

        photo: 'pics/yt2mp3.png',
        alt: 'youtube to mp3 converter',
        github: 'https://github.com/jurevito/yt2mp3',
        skills: ['Golang'],
    },
    {
        title: 'Personal Portfolio Website',
        description: 'I made personal portfolio website with 3D graphics using three.js library. I modelled, rigged and animated all 3D models from scratch using open source software Blender.',

        photo: 'pics/portfolio.png',
        alt: 'personal portfolio website',
        github: 'https://github.com/jurevito/website-portfolio',
        skills: ['SvelteKit', 'Tailwind', 'TypeScript', 'three.js', 'Blender', 'html', 'css'],
    }
];

export { projects };