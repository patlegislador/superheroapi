import { elements } from './mainView';

//Template for each hero
const displayHero = (hero, animation) => {

    // testImage(hero.image.url).then(

    //     function fulfilled(img) {
    //         console.log('That image is found and loaded', img);
    //     },

    //     function rejected() {
    //         console.log('That image was not found');
    //     }

    // );

    // const imageSource = await testImage(hero.image.url);

    return `
    <div class="col-3 my-2 item__box animated ${animation} fast">
        <div class="item" style="background-image: url('${hero.image.url}')" data-id="${hero.id}">
            <a href="#${hero.id}">
            </a>
        </div>
    </div>
    `;
};

//Render parts of heroes in the array using displayHero()
export const renderHeroes = (heroes, page = 1, animation) => {
    const start = (page - 1) * 8;
    const end = (page * 8);
    const displayedHeroes = heroes.slice(start, end);
    const list = displayedHeroes.map(hero => displayHero(hero, animation));
    elements.herobox.insertAdjacentHTML('beforeend', list.join(''));
};

const testImage = url => {

    const imgPromise = new Promise(function imgPromise(resolve, reject) {

        const imgElement = new Image();

        imgElement.addEventListener('load', function imgOnLoad() {
            resolve(url);
        });

        imgElement.addEventListener('error', function imgOnError() {
            reject();
        })

        imgElement.src = url;

    });

    return imgPromise;
}