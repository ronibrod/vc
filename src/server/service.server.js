const Fastify = require('fastify').default;

const MongoService = require('../helpers/mongoServer.service')
const RouteReader = require('../controllers/routeReader');
const RouteArray = require('../routes')

class Service {
    constructor() {
        this.port = process.env.PORT;
    }

    async init() {
        this.app = Fastify({ logger });
        await this.initDb();

        RouteReader.addRouteToApp(this.app, RouteArray);

        this.app.listen({ port: this.port, host: '0.0.0.0' });
        console.log('connected to server');
    }

    async initDb() {
        this.mongoService = new MongoService();
        this.mongoService.start()
    }

    async close() {
        console.log('closing server');
        await this.app.close();
    }
};

module.exports = Service;
