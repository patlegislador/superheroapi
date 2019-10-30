import { elements } from './mainView';

//Template for each hero
const displayHero = hero => {
    return `
    <div class="col-3 my-2 item__box">
        <div class="item" style="background-image: url(${hero.image.url})" data-id="${hero.id}">
            <a href="#${hero.id}">
            </a>
        </div>
    </div>
    `;
};

//Render parts of heroes in the array using displayHero()
export const renderHeroes = (heroes, page = 1) => {
    const list = heroes.map(hero => displayHero(hero));
    const start = (page - 1) * 8;
    const end = (page * 8);
    const displayedHeroes = list.slice(start, end).join('');
    elements.herobox.insertAdjacentHTML('beforeend', displayedHeroes);
};