interface Experience {
    position: string,
    company: string,
    type: string,

    from: Date,
    until: Date | 'Present',

    city: string,
    country: string,

    skills: string[],
}

const exps: Experience[] = [
    {
        position: 'Software Engineer',
        company: 'Globus Marine International',
        type: 'Intership',
        from: new Date('2021-04-01'),
        until: new Date('2021-06-25'),
        city: 'Ljubljana',
        country: 'Slovenia',
        skills: ['C#', '.NET', 'SQL Server'],
    }
];

exps.sort((a, b) => b.from.getTime() - a.from.getTime())

export { exps };