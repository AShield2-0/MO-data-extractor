import { Db, MongoClient, } from 'mongodb';
import { ENV_VALS } from '../config/config';
const MONGO_URL = ENV_VALS.mongoURL;
const dbName = ENV_VALS.mongoDB_DBName;

export const getDB = async (): Promise<[Db, MongoClient] | null> => {
    if (MONGO_URL === "") { console.error("MONGO_URL is not set"); return null };
    const client = new MongoClient(MONGO_URL);
    try {
        client.connect();
        const db = client.db(dbName);
        const endTime = performance.now();
        return [db, client]
    } catch (e) {
        console.error(e);
        throw new Error("" + e);
    }
}