import { ITaste } from '@entities/Taste';
import Neode from 'neode';
import Utils from '../../utils/Utils';

const instance = new Neode(`${process.env.NEO4J_BOLT_PATH}`, 'neo4j', '1234');

export interface ITasteDao {
    getOne: (id: string) => Promise<ITaste | null>;
    getAll: () => Promise<ITaste[]>;
    add: (Taste: ITaste) => Promise<void>;
    update: (Taste: ITaste) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class Taste implements ITasteDao {
    /**
     *
     */
    public async getAll(): Promise<ITaste[]> {
        // TODO
        let tastes: object = [];
        await instance.cypher(`MATCH (n:Taste) RETURN n`, {}).then((res: any) => {
            tastes = Utils.integrateResultList(res);
        });
        return tastes as any;
    }

    /**
     * @param id
     */
    public async getOne(id: string): Promise<ITaste | null> {
        // TODO
        let taste: object = [];
        await instance
            .cypher(`MATCH (n:Taste) WHERE n.id = $id RETURN n`, { id: id })
            .then((res: any) => {
                taste = Utils.integrateResultList(res);
            });
        return taste as any;
    }

    /**
     * @param name
     */
    public async getOneByName(name: string): Promise<ITaste | null> {
        // TODO
        let taste: object = [];
        await instance
            .cypher(`MATCH (n:Taste) WHERE n.name =~'.*${name}.*' RETURN n`, {})
            .then((res: any) => {
                taste = Utils.integrateResultList(res);
            });
        return taste as any;
    }

    /**
     *
     * @param dish
     */
    public async add(Taste: ITaste): Promise<void> {
        // TODO
        return {} as any;
    }

    /**
     *
     * @param dish
     */
    public async update(Taste: ITaste): Promise<void> {
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

export default Taste;
