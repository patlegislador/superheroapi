const herobox = document.querySelector('.hero__box');
const btnbox = document.querySelector('.btn__box');
const descbox = document.querySelector('.desc__box');
const searchtitle = document.querySelector('.search__info');


//Template for each hero
const displayHero = hero => {
    return `
    <div class="col-3 my-2">
        <div class="item" style="background-image: url(${hero.image.url})" data-id="${hero.id}">
            <a href="#${hero.id}">
            </a>
        </div>
    </div>
    `;
};

//Render parts of heroes in the array using displayHero()
export const renderHeroes = (heroes, page = 1) => {
    const list = heroes.map(hero => displayHero(hero));
    const start = (page - 1) * 8;
    const end = (page * 8);
    const displayedHeroes = list.slice(start, end).join('');
    herobox.insertAdjacentHTML('beforeend', displayedHeroes);
};

//Separate method for getting button html to be used in renderButtons()
const displayButton = (type, page) => {
    return `<a class="btn__page--${type} btn btn-lg btn-danger" data-type="${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>${type}</a>`
}

//Rendering buttons on the button box
export const renderButtons = (page, resultCount) => {
    const pageCount = Math.ceil(resultCount / 8);
    let button;

    if (pageCount > 1) {
        if (page === 1) {
            button = displayButton('next', page);
        } else if (page > 1 && page < pageCount) {
            button = `
            ${displayButton('prev', page)}
            ${displayButton('next', page)}
            `;
        } else if (page === pageCount) {
            button = displayButton('prev', page);
        } else {
            alert('Something went wrong with the pagination. Please reload.');
        }
    } else {
        button = '';
    }

    btnbox.insertAdjacentHTML('beforeend', button);
}

const renderStat = powerstats => {
    const statTemplate = Object.keys(powerstats).map(stat => `
        <div class="progress">
            <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${powerstats[stat]}%"
                aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p class="mt-1">${stat}: ${powerstats[stat]}</p>
    `);

    return statTemplate.join('');
}

export const renderHeroStats = hero => {
    const descBox = document.querySelector('.desc__box');
    descBox.innerHTML = '';
    Object.keys(hero.powerstats).map(stat => {
        hero.powerstats[stat] === 'null' ? hero.powerstats[stat] = '???' : null;
    });

    const template = `
    <div class="hero__desc">
        <h1 class="hero__name bg-danger">${hero.name}</h1>
        <h4 class="hero__alias">${hero.biography.aliases[0] === '-' ? '<span class="bg-danger px-2">N/A</span>' : hero.biography.aliases[0]}</h4>

        <div class="hero__stats">
            ${renderStat(hero.powerstats)}
        </div>
    </div>
    `;

    descBox.insertAdjacentHTML('afterbegin', template);
};

export const displaySearchInfo = (heroes, input) => {
    searchtitle.innerHTML = `Displaying <span class="bg-danger px-2">${heroes.length}</span> results matching <span class="bg-danger px-2">${input}</span>`;
};

export const handleFetchError = (input) => {
    searchtitle.innerHTML = `<span class="bg-dark px-2">No results matching "${input}"</span>`;
};

export const clearHeroBox = () => {
    herobox.innerHTML = '';
    btnbox.innerHTML = '';
    descbox.innerHTML = '';
    if (searchtitle) searchtitle.innerHTML = '';

};


export const showLoader = () => {
    herobox.insertAdjacentHTML('beforeend', `
    <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
    </div>`
    );
};

export const clearLoader = () => {
    const loader = document.querySelector('.spinner-border')
    if (loader) loader.remove();
};