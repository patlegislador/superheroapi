import { elements } from './mainView';

//Separate method for getting button html to be used in renderButtons()
const displayButton = (type, page) => `<a class="btn__page--${type} btn btn-lg btn-danger" data-type="${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>${type === 'prev' ? 'Previous' : 'Next'}</a>`;

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

    elements.btnbox.insertAdjacentHTML('beforeend', button);
}