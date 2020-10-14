import { IChineseCuisine } from '@entities/ChineseCuisine';
import Neode from 'neode';
import Utils from '../../utils/Utils';

const instance = new Neode(
    `${process.env.NEO4J_BOLT_PATH}`,
    `${process.env.NEO4J_USERNAME}`,
    `${process.env.NEO4J_PASSWORD}`
);
export interface IChineseCuisineDao {
    getOne: (id: string) => Promise<IChineseCuisine | null>;
    getAll: () => Promise<IChineseCuisine[]>;
    add: (ChineseCuisine: IChineseCuisine) => Promise<void>;
    update: (ChineseCuisine: IChineseCuisine) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class ChineseCuisine implements IChineseCuisineDao {
    /**
     *
     */
    public async getAll(): Promise<IChineseCuisine[]> {
        // TODO
        let chineseCuisines: object = [];
        await instance.cypher(`MATCH (n:Chinese_Cuisine) RETURN n`, {}).then((res: any) => {
            chineseCuisines = Utils.integrateResultList(res);
        });
        return chineseCuisines as any;
    }

    /**
     * @param id
     */
    public async getOne(id: string): Promise<IChineseCuisine | null> {
        // TODO
        let chineseCuisine: object = [];
        await instance
            .cypher(`MATCH (n:Chinese_Cuisine) WHERE n.id = $id RETURN n`, { id: id })
            .then((res: any) => {
                chineseCuisine = Utils.integrateResultList(res);
            });
        return chineseCuisine as any;
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
