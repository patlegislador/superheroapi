import Hero from './models/Hero';
import { displayHero, clearHeroBox, showLoader, clearLoader } from './views/heroView';

const state = {};

const searchHero = async () => {
    clearHeroBox();
    showLoader();
    state.search = new Hero(document.querySelector('.btn__search').value);
    try {
        await state.search.fetchHero();
        displayHero(state.search.result);
    } catch (err) {
        console.log(err);
    }
    clearLoader();
    console.log(state.search.result);
}


// EVENT LISTENERS
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    searchHero();
})

document.querySelector('.hero__box').addEventListener('click', e => {
    const targetHero = e.target.closest('.item');
    console.log(targetHero.dataset.id);
})