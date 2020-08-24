import { IIngredient } from '@entities/Ingredient';
import Neode from 'neode';
import Utils from '../../utils/Utils';

const instance = new Neode('bolt://localhost:11002', 'neo4j', '1234');

export interface IIngredientDao {
    getOne: (id: string) => Promise<IIngredient | null>;
    getAll: () => Promise<IIngredient[]>;
    add: (ingredient: IIngredient) => Promise<void>;
    update: (ingredient: IIngredient) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class IngredientDao implements IIngredientDao {
    /**
     *
     */
    public async getAll(): Promise<IIngredient[]> {
        // TODO
        let ingredients: object = [];
        await instance.cypher(`MATCH (n:Ingredient) RETURN n`, {}).then((res: any) => {
            ingredients = Utils.integrateResultList(res);
        });
        return ingredients as any;
    }

    /**
     * @param id
     */
    public async getOne(id: string): Promise<IIngredient | null> {
        // TODO
        let ingredient: object = [];
        await instance
            .cypher(`MATCH (n:Ingredient) WHERE n.id = $id RETURN n`, { id: id })
            .then((res: any) => {
                ingredient = Utils.integrateResultList(res);
            });
        return ingredient as any;
    }

    /**
     * @param name
     */
    public async getOneByName(name: string): Promise<IIngredient | null> {
        // TODO
        let ingredient: object = [];
        await instance
            .cypher(`MATCH (n:Ingredient) WHERE n.name =~'.*${name}.*' RETURN n`, {})
            .then((res: any) => {
                ingredient = Utils.integrateResultList(res);
            });
        return ingredient as any;
    }

    /**
     *
     * @param ingredient
     */
    public async add(ingredient: IIngredient): Promise<void> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param ingredient
     */
    public async update(ingredient: IIngredient): Promise<void> {
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

export default IngredientDao;
