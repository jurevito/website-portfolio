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
    position: 'Data Scientist',
    company: 'DikinBaws',
    type: 'Full Time',
    from: new Date('2022-02-01'),
    until: 'Present',
    city: 'Krakow',
    country: 'Poland',
    skills: ['Python', 'PyTorch', 'ScikitLearn'],
};

const exps: Experience[] = [exp1, exp2];
export { exps };