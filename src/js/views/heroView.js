const herobox = document.querySelector('.hero__box');
const loader = document.querySelector('.spinner-border');

export const displayHero = heroes => {
    const list = heroes.map(hero => {
        return `
            <a href="#${hero.id}">
                <img src="${hero.image.url}" alt="${hero.name}" class="item">
            </a>
        `
    }).join('');

    herobox.insertAdjacentHTML('beforeend', list);
};

export const renderHeroes = (page = 1, heroes) => {

};

const displayButton = () => {

}

export const renderButtons = () => {

}


export const clearHeroBox = () => {
    herobox.innerHTML = '';
}

export const showLoader = () => {
    herobox.insertAdjacentHTML('afterbegin', `
    <div class="spinner-border m-5" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
    );
}

export const clearLoader = () => {
    const loader = document.querySelector('.spinner-border')
    if (loader) loader.remove();
}