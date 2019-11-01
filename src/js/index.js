import Heroes from './models/Heroes';
import { renderHeroes } from './views/heroView';
import { renderButtons } from './views/buttonsView';
import { renderHeroStats } from './views/statsView';
import { elements, handleFetchError, clearHeroBox, clearLoader, showLoader, displaySearchInfo } from './views/mainView';

const state = {
    page: 1
};

const searchHero = async () => {
    state.page = 1;
    state.input = elements.searchBtn.value;
    const newHeroes = new Heroes(state.input);

    clearHeroBox();
    showLoader();
    try {
        await newHeroes.fetchHero();
        state.heroes = newHeroes.result;
        if (state.heroes) {
            displaySearchInfo(state.heroes, state.input);
            renderHeroes(state.heroes, state.page);
            renderButtons(state.page, state.heroes.length);
        } else {
            handleFetchError(state.input);
        }
    } catch (err) {

        console.log(err); q
    }
    clearLoader();
}


// EVENT LISTENERS

//Even listener for Search Button
elements.searchBar.addEventListener('submit', e => {
    e.preventDefault();
    searchHero();
})


//Event Listener for All clicks inside the Hero Box
elements.herobox.addEventListener('click', e => {
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



//Event listener for All clicks inside the Button Box
elements.btnbox.addEventListener('click', e => {

    let animation;

    if (e.target.dataset.type === 'prev') {
        state.page = state.page - 1;
        animation = 'zoomInRight';
    } else {
        state.page = state.page + 1;
        animation = 'zoomInLeft';
    }
    console.log(e.target.dataset.type);

    if (e.target.dataset.type) {
        clearHeroBox();
        showLoader();
        displaySearchInfo(state.heroes, state.input);
        renderHeroes(state.heroes, state.page, animation);
        renderButtons(state.page, state.heroes.length - 1);
        clearLoader();
    }

})

//homepage 
elements.homeBtn.addEventListener('click', () => {
    elements.homePage.classList.add('fadeOutUp');
});

elements.exitBtn.addEventListener('click', () => {
    elements.homePage.classList.remove('fadeOutUp');
    elements.homePage.classList.add('fadeInDown');
});