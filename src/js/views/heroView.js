import { elements } from './mainView';

//Template for each hero
const displayHero = (hero, animation) => {
    return `
    <div class="col-3 my-2 item__box animated ${animation} fast">
        <div class="item" style="background-image: url(${hero.image.url})" data-id="${hero.id}">
            <a href="#${hero.id}">
            </a>
        </div>
    </div>
    `;
};

//Render parts of heroes in the array using displayHero()
export const renderHeroes = (heroes, page = 1, animation) => {
    const list = heroes.map(hero => displayHero(hero, animation));
    const start = (page - 1) * 8;
    const end = (page * 8);
    const displayedHeroes = list.slice(start, end).join('');
    elements.herobox.insertAdjacentHTML('beforeend', displayedHeroes);
};