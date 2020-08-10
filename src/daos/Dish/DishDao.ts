import { IDish } from '@entities/Dish';
import Neode from 'neode';
import Utils from '../../utils/Utils';

const instance = new Neode('bolt://localhost:11002', 'neo4j', '1234');

export interface IDishDao {
    getOne: (id: string) => Promise<IDish | null>;
    getAll: () => Promise<IDish[]>;
    add: (dish: IDish) => Promise<void>;
    update: (dish: IDish) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class DishDao implements IDishDao {
    /**
     * @param id
     */
    public async getOne(id: string): Promise<IDish | null> {
        // TODO
        let dish: object = [];
        await instance
            .cypher(`MATCH (n:Dish) WHERE n.id = $id RETURN n`, { id: id })
            .then((res: any) => {
                dish = Utils.integrateResultList(res);
            });
        return dish as any;
    }

    /**
     * @param name
     */
    public async getOneByName(name: String): Promise<IDish | null> {
        // TODO
        let dish: object = [];
        await instance
            .cypher(`MATCH (n:Dish) WHERE n.name = $name RETURN n`, { name: name })
            .then((res: any) => {
                dish = Utils.integrateResultList(res);
            });
        return dish as any;
    }

    /**
     * @param name
     */
    public async getOneByIngredient(ingredient: String): Promise<IDish | null> {
        // TODO
        let dish: object = [];
        await instance
            .cypher(`MATCH (n:Dish) WHERE n.ingredients =~ '.*${ingredient}.*' RETURN n`, {})
            .then((res: any) => {
                dish = Utils.integrateResultList(res);
            });
        return dish as any;
    }

    /**
     *
     */
    public async getAll(): Promise<IDish[]> {
        // TODO
        let dishes: object = [];
        await instance.cypher(`MATCH (n:Dish) RETURN n`, {}).then((res: any) => {
            dishes = res.records;
        });
        return dishes as any;
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
