export default class Hero {
    constructor(hero) {
        this.name = hero.name,
            this.alias = hero.biography.aliases[0],
            this.hometown = hero.biography['place-of-birth'],
            this.race = hero.appearance.race,
            this.alterego = hero.biography['alter-egos'],
            this.alignment = hero.biography.alignment,
            this.img = hero.image.url
    }
}