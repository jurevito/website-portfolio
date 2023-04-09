import { publish } from 'gh-pages';

publish('build', {
    branch: 'gh-pages',
    repo: 'https://github.com/jurevito/website-portfolio.git',
    user: {
        name: 'Jure Vito Srovin',
        email: 'jure.vit@gmail.com'
    },
    dotfiles: true,
}, () => {
    console.log("Deploy Complete!");
});