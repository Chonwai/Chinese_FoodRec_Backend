export interface IIngredient {
    id: number;
    name: string;
    email: string;
}

class Ingredient implements IIngredient {
    public id: number;
    public name: string;
    public email: string;

    constructor(nameOrIngredient: string | IIngredient, email?: string, id?: number) {
        if (typeof nameOrIngredient === 'string') {
            this.name = nameOrIngredient;
            this.email = email || '';
            this.id = id || -1;
        } else {
            this.name = nameOrIngredient.name;
            this.email = nameOrIngredient.email;
            this.id = nameOrIngredient.id;
        }
    }
}

export default Ingredient;
