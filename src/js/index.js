import Heroes from './models/Heroes';
import { renderHeroes, clearHeroBox, showLoader, clearLoader, renderHeroStats } from './views/heroView';

const state = {};
window.s = state;

const searchHero = async () => {
    clearHeroBox();
    showLoader();
    const newHeroes = new Heroes(document.querySelector('.btn__search').value); //
    try {
        await newHeroes.fetchHero();
        state.heroes = newHeroes.result;
        renderHeroes(state.heroes);
    } catch (err) {
        console.log(err);
    }
    clearLoader();
}


// EVENT LISTENERS

//Even listener for Search Button
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    searchHero();
})


//Event Listener for All clicks inside the Hero Box
document.querySelector('.hero__box').addEventListener('click', e => {
    const targetHero = e.target.closest('.item');
    if (targetHero) { // make sure what we are clicking isn't null
        const heroID = targetHero.dataset.id;

        state.heroes.forEach(hero => {
            if (hero.id === heroID) { //matches hero in the state and clicked hero using id -> render stats
                renderHeroStats(hero);
            }
        });
    }
})