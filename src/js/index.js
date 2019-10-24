import Hero from './Hero';

const state = {};

const searchHero = async () => {
    const search = new Hero(document.querySelector('.btn__search').value);
    state.search = await search.fetchHero();
    console.log(search.result);
}

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    searchHero();
})