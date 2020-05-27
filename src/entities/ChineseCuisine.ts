export interface IChineseCuisine {
    id: number;
    name: string;
    country: string;
}

class ChineseCuisine implements IChineseCuisine {
    public id: number;
    public name: string;
    public country: string;

    constructor(nameOrChineseCuisine: string | IChineseCuisine, country?: string, id?: number) {
        if (typeof nameOrChineseCuisine === 'string') {
            this.name = nameOrChineseCuisine;
            this.country = country || '';
            this.id = id || -1;
        } else {
            this.name = nameOrChineseCuisine.name;
            this.country = nameOrChineseCuisine.country;
            this.id = nameOrChineseCuisine.id;
        }
    }
}

export default ChineseCuisine;
