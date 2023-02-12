const Fastify = require('fastify').default;

const StartMongoos = require('../helpers/mongoose')
const RouteReader = require('../controllers/routeReader');
const RouteArray = require('../routes')

class Service {
    constructor() {
        // this.port = process.env.PORT;
        this.port = '8080';
    }

    async init() {
        // await this.initDb();
        await StartMongoos();
        
        RouteReader.addRouteToApp(this.app, RouteArray);

        this.app.listen({ port: this.port, host: '0.0.0.0' });
        console.log('connected to server');
    }

    async initDb() {
        await startMongoos();
    }

    // async initDb() {
    //     this.mongoService = new MongoService();
    //     this.mongoService.start()
    // }

    // async initDb() {
    //     Fastify.register(require('@fastify/mongodb'), {
    //         forceClose: true,
    //         url: 'mongodb://mongo/vc'
    //     });
    // }

    async close() {
        console.log('closing server');
        await this.app.close();
    }
};

module.exports = Service;
