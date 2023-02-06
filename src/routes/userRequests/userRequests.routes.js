const Handler = require('./handler');

const userRequestsRoutes = () => [
    {
        method: 'post',
        path: '/user',
        handler: Handler.postUser,
        description: ''
    },
    {
        method: 'get',
        path: '/user',
        handler: Handler.getUser,
        description: ''
    }
];

module.exports = userRequestsRoutes;
