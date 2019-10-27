const herobox = document.querySelector('.hero__box');
const btnbox = document.querySelector('.btn__box');
const displayHero = hero => {
    return `
    <div class="col-3">
        <a href="#${hero.id}">
            <img src="${hero.image.url}" alt="${hero.name}" class="item" data-id="${hero.id}">
        </a>
    </div>
    `;
};

//Render parts of heroes in the array
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

export const renderHeroStats = hero => {
    const descBox = document.querySelector('.desc__box');
    descBox.innerHTML = '';
    Object.keys(hero.powerstats).map(stat => {
        hero.powerstats[stat] === 'null' ? hero.powerstats[stat] = 'Unknown' : null;
    });
    const template = `
    <div class="hero__desc">
         <h3 class="hero__name">${hero.name}</h3>
            <h5 class="hero__alias">"${hero.biography.aliases[0]}"</h5>
            <hr>

            <div class="hero__stats">
                <div class="progress">
                    <div class="progress-bar progress-bar-striped" role="progressbar" style="width: ${hero.powerstats.combat}%"
                        aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-primary mt-1">Combat: ${hero.powerstats.combat}</p>


                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: ${hero.powerstats.durability}%"
                        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-success mt-1">Durability: ${hero.powerstats.durability}</p>

                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: ${hero.powerstats.intelligence}%"
                        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-info mt-1">Intelligence: ${hero.powerstats.intelligence}</p>

                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: ${hero.powerstats.power}%"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-warning mt-1">Power: ${hero.powerstats.power}</p>

                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: ${hero.powerstats.speed}%"
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-danger mt-1">Speed: ${hero.powerstats.speed}</p>

                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-dark" role="progressbar" style="width: ${hero.powerstats.strength}%"
                        aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="bg-dark mt-1">Strength: ${hero.powerstats.strength}</p>
            </div>
        </div>
    `;

    descBox.insertAdjacentHTML('afterbegin', template);
};

export const displaySearchInfo = (heroes, input) => {
    const text = `<h2 class="search__info">Displaying ${heroes.length} results matching <span class="bg-danger">${input}</span></h2>`;
    document.querySelector('.header').insertAdjacentHTML('afterbegin', text);
};

export const clearHeroBox = () => {
    herobox.innerHTML = '';
    btnbox.innerHTML = '';

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