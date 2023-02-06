const PageRequestsRoutes = require('./pageRequests/pageRequests.routes');
const userRequestsRoutes = require('./userRequests/userRequests.routes');

function makeRoutesArray(...args) {
    return [].concat(...args);
}

module.exports = makeRoutesArray(PageRequestsRoutes, userRequestsRoutes);
