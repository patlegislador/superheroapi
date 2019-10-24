import Hero from './models/Hero';
import { displayHero, clearHeroBox, showLoader, clearLoader } from './views/heroView';

const state = {};

const searchHero = async () => {
    clearHeroBox();
    showLoader();
    state.search = new Hero(document.querySelector('.btn__search').value);
    await state.search.fetchHero();
    displayHero(state.search.result);
    clearLoader();
    console.log(state.search.result);
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    searchHero();
})