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
     *
     */
    public async getAll(): Promise<IDish[]> {
        // TODO
        let dishes: object = [];
        await instance.cypher(`MATCH (n:Dish) RETURN n`, {}).then((res: any) => {
            dishes = Utils.integrateResultList(res);
        });
        return dishes as any;
    }

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
    public async getOneByName(name: string): Promise<IDish | null> {
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
    public async getOneByIngredient(ingredient: string): Promise<IDish | null> {
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
     * @param name
     */
    public async getSomeByFilter(
        chinese_curisine: string,
        ingredient: string,
        taste: string
    ): Promise<IDish | null> {
        // TODO
        let dish: object = [];
        await instance
            .cypher(
                `MATCH (d:Dish)-[r1:is_one_of]->(cc:Chinese_Cuisine {name: $chinese_curisine}), (d:Dish)-[r2:has_ingredient]->(i:Ingredient), (d:Dish)-[r3:has_taste]->(t:Taste)
                                WHERE i.name =~'.*${ingredient}.*' AND t.name =~'.*${taste}.*'
                                RETURN DISTINCT d`,
                { chinese_curisine: chinese_curisine }
            )
            .then((res: any) => {
                dish = Utils.integrateResultList(res);
            });
        return dish as any;
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
