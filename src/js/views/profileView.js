import { elements } from './mainView';

export const renderProfile = hero => {

    elements.profilePage.style.display = 'grid';
    const template = `
        <a class="profile__back btn btn-lg animated pulse" href="#">▲</a>
        <div class="left">
            <img src="${hero.img}" alt="${hero.name}" onerror="this.src='https://www.pnglot.com/pngfile/detail/173-1734608_random-stuff-unknown-character.png'">
        </div>

        <div class="right">
            <h2 class="profile__name">Name: <span class="bg-danger">${hero.name}</span></h2>
            <h2 class="profile__alias">A.K.A: <span class="bg-danger">${hero.alias === '-' ? 'Unknown' : hero.alias}</span></h2>
            <h2 class="profile__race">Race: <span class="bg-danger">${hero.race === 'null' ? 'Unknown' : hero.race}</span></h2>
            <h2 class="profile__home">Hometown: <span class="bg-danger">${hero.hometown === '-' ? 'Unknown' : hero.hometown}</span></h2>
            <h2 class="profile__alignment">Alignment: <span class="bg-danger">${hero.alignment}</span></h2>
            <h2 class="profile__alterego">Alter Ego: <span class="bg-danger">${hero.alterego}</span></h2>
            <h2 class="profile__job">Occupation: <span class="bg-danger">${hero.work}</span></h2>
        </div>
    `;
    elements.profilePage.insertAdjacentHTML('afterbegin', template);
}


export const clearExisitingProfile = () => {
    if (elements.profilePage) elements.profilePage.innerHTML = '';
}

export const closeProfile = () => {
    if (elements.profilePage) elements.profilePage.style.display = 'none';
}
