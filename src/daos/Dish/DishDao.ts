import { IDish } from '@entities/Dish';

export interface IDishDao {
    getOne: (name: string) => Promise<IDish | null>;
    getAll: () => Promise<IDish[]>;
    add: (dish: IDish) => Promise<void>;
    update: (dish: IDish) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class DishDao implements IDishDao {
    /**
     * @param email
     */
    public async getOne(name: string): Promise<IDish | null> {
        // TODO
        return [] as any;
    }

    /**
     *
     */
    public async getAll(): Promise<IDish[]> {
        // TODO
        return [] as any;
    }

    /**
     *
     * @param dish
     */
    public async add(dish: IDish): Promise<void> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param dish
     */
    public async update(dish: IDish): Promise<void> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<void> {
        // TODO
        return {} as any;
    }
}

export default DishDao;
