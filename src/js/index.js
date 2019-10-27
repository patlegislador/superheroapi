import Heroes from './models/Heroes';
import { renderHeroes, clearHeroBox, showLoader, clearLoader, renderHeroStats, renderButtons, displaySearchInfo } from './views/heroView';

const state = {
    page: 1
};
window.s = state;

const searchHero = async () => {
    state.page = 1;
    const input = document.querySelector('.btn__search').value;
    const newHeroes = new Heroes(input);

    clearHeroBox();
    showLoader();
    try {
        await newHeroes.fetchHero();
        state.heroes = newHeroes.result;
        console.log(state.heroes, state.heroes.length);
        displaySearchInfo(state.heroes, input);
        renderHeroes(state.heroes, state.page);
        renderButtons(state.page, state.heroes.length);
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

document.querySelector('.btn__box').addEventListener('click', e => {

    if (e.target.dataset.type === 'prev') {
        state.page = state.page - 1;
    } else {
        state.page = state.page + 1;
    }

    console.log(state.page);
    clearHeroBox();
    showLoader();
    renderHeroes(state.heroes, state.page)
    renderButtons(state.page, state.heroes.length - 1);
    clearLoader();

})