import Neode from 'neode';

const instance = new Neode(
    `${process.env.NEO4J_BOLT_PATH}`,
    `${process.env.NEO4J_USERNAME}`,
    `${process.env.NEO4J_PASSWORD}`
);

export default instance;
