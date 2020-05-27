import { IChineseCuisine } from '@entities/ChineseCuisine';

export interface IChineseCuisineDao {
    getOne: (name: string) => Promise<IChineseCuisine | null>;
    getAll: () => Promise<IChineseCuisine[]>;
    add: (ChineseCuisine: IChineseCuisine) => Promise<void>;
    update: (ChineseCuisine: IChineseCuisine) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class ChineseCuisine implements IChineseCuisineDao {
    /**
     * @param email
     */
    public async getOne(name: string): Promise<IChineseCuisine | null> {
        // TODO
        return [] as any;
    }

    /**
     *
     */
    public async getAll(): Promise<IChineseCuisine[]> {
        // TODO
        return [] as any;
    }

    /**
     *
     * @param dish
     */
    public async add(ChineseCuisine: IChineseCuisine): Promise<void> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param dish
     */
    public async update(ChineseCuisine: IChineseCuisine): Promise<void> {
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

export default ChineseCuisine;
