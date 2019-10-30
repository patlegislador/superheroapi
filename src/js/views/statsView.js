import { elements } from './mainView';

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
    elements.descBox.innerHTML = '';
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

    elements.descBox.insertAdjacentHTML('afterbegin', template);
};