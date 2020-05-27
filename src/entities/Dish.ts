export interface IDish {
    id: number;
    name: string;
    email: string;
}

class Dish implements IDish {
    public id: number;
    public name: string;
    public email: string;

    constructor(nameOrDish: string | IDish, email?: string, id?: number) {
        if (typeof nameOrDish === 'string') {
            this.name = nameOrDish;
            this.email = email || '';
            this.id = id || -1;
        } else {
            this.name = nameOrDish.name;
            this.email = nameOrDish.email;
            this.id = nameOrDish.id;
        }
    }
}

export default Dish;
