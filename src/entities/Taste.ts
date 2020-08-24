export interface ITaste {
    id: number;
    name: string;
}

class Taste implements ITaste {
    public id: number;
    public name: string;

    constructor(nameOrTaste: string | ITaste, country?: string, id?: number) {
        if (typeof nameOrTaste === 'string') {
            this.name = nameOrTaste;
            this.id = id || -1;
        } else {
            this.name = nameOrTaste.name;
            this.id = nameOrTaste.id;
        }
    }
}

export default Taste;
