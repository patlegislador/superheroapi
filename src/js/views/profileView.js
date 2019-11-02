import { elements } from './mainView';

export const renderProfile = hero => {
    const template = `
        <div class="left">
            <img src="${hero.img}" alt="${hero.name}">
        </div>

        <div class="right">
            <h2 class="profile__name">Name: <span class="bg-danger">${hero.name}</span></h2>
            <h2 class="profile__alias">A.K.A: <span class="bg-danger">${hero.alias}</span></h2>
            <h2 class="profile__race">Race: <span class="bg-danger">${hero.race}</span></h2>
            <h2 class="profile__home">Hometown: <span class="bg-danger">${hero.hometown}</span></h2>
            <h2 class="profile__alignment">Alignment: <span class="bg-danger">${hero.alignment}</span></h2>
            <h2 class="profile__alterego">Alter Ego: <span class="bg-danger">${hero.alterego}</span></h2>
        </div>
    `;

    elements.profilePage.insertAdjacentHTML('afterbegin', template);
}


export const clearExisitingProfile = () => {
    elements.profilePage.innerHTML = '';
}