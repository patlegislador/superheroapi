export const elements = {
    herobox: document.querySelector('.hero__box'),
    btnbox: document.querySelector('.btn__box'),
    descbox: document.querySelector('.desc__box'),
    searchtitle: document.querySelector('.search__info'),
    searchBtn: document.querySelector('.btn__search'),
    homeBtn: document.querySelector('.btn__home'),
    searchBar: document.querySelector('.search'),
    homePage: document.querySelector('.homepage'),
    exitBtn: document.querySelector('.btn__exit'),
    profilePage: document.querySelector('.hero__profile'),
    profileBtn: document.querySelector('.profile__back')
}

export const displaySearchInfo = (heroes, input) => {
    elements.searchtitle.innerHTML = `Displaying <span class="bg-danger px-2">${heroes.length}</span> results matching <span class="bg-danger px-2">${input}</span>`;
};

export const handleFetchError = (input) => {
    elements.searchtitle.innerHTML = `<span class="bg-dark px-2">No results matching "${input}"</span>`;
};

export const clearHeroBox = () => {
    elements.herobox.innerHTML = '';
    elements.btnbox.innerHTML = '';
    elements.descbox.innerHTML = '';
    if (elements.searchtitle) elements.searchtitle.innerHTML = '';
};

export const showLoader = () => {
    elements.herobox.insertAdjacentHTML('beforeend', `
    <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
    );
};

export const clearLoader = () => {
    const loader = document.querySelector('.spinner-border')
    if (loader) loader.remove();
};