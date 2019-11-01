import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async fetchResults() {
        try {
            const search = await axios(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10212855971668612/search/${this.query}`);
            this.result = search.data.results;
        } catch (err) {
            console.log(err);
        }
    }
}