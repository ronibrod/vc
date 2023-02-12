const Handler = require('./handler');

const pageRequestsRoutes = () => [
    {
        method: 'get',
        path: '/homePage',
        handler: Handler.getHomePage,
        description: ''
    },
    {
        method: 'post',
        path: '/entryPage',
        handler: Handler.postEntryPage,
        description: ''
    },
    {
        method: 'get',
        path: '/entryPage',
        handler: Handler.getEntryPage,
        description: ''
    },
    {
        method: 'put',
        path: '/entryPage',
        handler: Handler.putEntryPage,
        description: ''
    }
];

module.exports = pageRequestsRoutes;
