const MongoClient = require('mongodb').MongoClient;

class MongoService {
    constructor() {
        this.mongoUri = process.env.MONGO_URI;
    }

    async start() {
        this.mongoClient = new MongoClient(this.mongoUri);
        await this.mongoClient.connect();
        console.log('connected to mongo server');

        const virtualCemeteryDb = this.mongoClient.db('virtualCemetery');
        const userDb = virtualCemeteryDb.collections(['users']);
        return virtualCemeteryDb;
    }

    async close() {
        console.log('closing mongo server');
        this.mongoClient.close();
    }
};

module.exports = MongoService;
