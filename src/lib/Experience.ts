interface Experience {
    position: string,
    company: string,
    type: string,

    from: Date,
    until: Date,

    city: string,
    country: string,

    skills: string[],
}

const exp1: Experience = {
    position: 'Software Engineer',
    company: 'Globus Marine International',
    type: 'Intership',
    from: new Date('2021-04-01'),
    until: new Date('2021-06-25'),
    city: 'Ljubljana',
    country: 'Slovenia',
    skills: ['C#', '.NET', 'SQL Server'],
};

const exp2: Experience = {
    position: 'Banana Picker',
    company: 'Imaginary Job',
    type: 'CEO',
    from: new Date('2035-01-01'),
    until: new Date('2038-12-25'),
    city: 'Krakow',
    country: 'Poland',
    skills: ['Coffee', 'Rust', 'C++'],
};

const exps: Experience[] = [exp1, exp2];
export { exps };