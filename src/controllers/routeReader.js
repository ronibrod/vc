const addRouteToFastify = (app, route) => {
    app[route.method](
        route.path,
        route.handler
    );
};

module.exports.addRouteToApp = (app, routes) => {
    routes.forEach((route) => {
        addRouteToFastify(app, route);
    });
};
