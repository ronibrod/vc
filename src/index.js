const Service = require('./server/service.server');

const start = async () => {
    const service = new Service();
    await service.init();
}

start();
