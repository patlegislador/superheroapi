import { elements } from './mainView';

//Template for each hero
const displayHero = (hero, animation) => {

    return `
        <img src="${hero.image.url}" class="animated ${animation} fast" data-id="${hero.id}" alt="${hero.name}" onerror="this.src='https://www.pnglot.com/pngfile/detail/173-1734608_random-stuff-unknown-character.png';">
        `;
};

//Render parts of heroes in the array using displayHero()
export const renderHeroes = (heroes, page = 1, animation) => {
    const start = (page - 1) * 8;
    const end = (page * 8);
    const displayedHeroes = heroes.slice(start, end);
    const list = displayedHeroes.map(hero => displayHero(hero, animation));
    elements.herobox.insertAdjacentHTML('beforeend', list.join(''));
};

const testImage = url => {

    const imgPromise = new Promise(function imgPromise(resolve, reject) {

        const imgElement = new Image();

        imgElement.addEventListener('load', function imgOnLoad() {
            resolve(url);
        });

        imgElement.addEventListener('error', function imgOnError() {
            reject();
        })

        imgElement.src = url;

    });

    return imgPromise;
}