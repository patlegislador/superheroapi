import axios from 'axios';

export default class Heroes {
    constructor(query) {
        this.query = query;
    }

    async fetchHero() {
        try {
            const hero = await axios(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10212855971668612/search/${this.query}`);
            this.result = hero.data.results;
        } catch (err) {
            console.log(err);
        }
    }

}