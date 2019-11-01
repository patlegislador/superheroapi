import Search from './models/Search';
import { renderHeroes } from './views/heroView';
import { renderButtons } from './views/buttonsView';
import { renderHeroStats } from './views/statsView';
import { elements, handleFetchError, clearHeroBox, clearLoader, showLoader, displaySearchInfo } from './views/mainView';

const state = {
    page: 1
};

const searchHeroes = async () => {
    state.page = 1;
    state.input = elements.searchBtn.value;
    const newSearch = new Search(state.input);

    clearHeroBox();
    showLoader();
    try {
        await newSearch.fetchResults();
        state.search = newSearch.result;
        if (state.search) {
            renderData();
        } else {
            handleFetchError(state.input);
        }
    } catch (err) {
        console.log(err);
    }
    clearLoader();
}

// EVENT LISTENERS

//Even listener for Search Button
elements.searchBar.addEventListener('submit', e => {
    e.preventDefault();
    searchHeroes();
})

//Event Listener for All clicks inside the Hero Box
elements.herobox.addEventListener('click', e => {
    const targetHero = e.target.closest('.item');
    if (targetHero) { // make sure what we are clicking isn't null
        const heroID = targetHero.dataset.id;

        state.search.forEach(hero => {
            if (hero.id === heroID) { //matches hero in the state and clicked hero using id -> render stats
                renderHeroStats(hero);
                //state.hero = new Hero(targetHero)
            }
        });;
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

    if (e.target.dataset.type) {
        clearHeroBox();
        showLoader();
        renderData(animation);
        clearLoader();
    }

})

//homepage 
elements.homeBtn.addEventListener('click', () => {
    elements.homePage.classList.remove('fadeInDown');
    elements.homePage.classList.add('fadeOutUp');
});

elements.exitBtn.addEventListener('click', () => {
    elements.homePage.classList.remove('fadeOutUp');
    elements.homePage.classList.add('fadeInDown');
});


// FUNCTIONS

function renderData(animation) {
    displaySearchInfo(state.search, state.input);
    renderHeroes(state.search, state.page, animation);
    renderButtons(state.page, state.search.length);
}
