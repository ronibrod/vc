const virtualCemeteryDb = require('')

module.exports.postUser = async (request, reply) => {
    const userData = request.$;
    await userDb.insertOne(userData);
};

module.exports.getUser = async (request, reply) => {
    const userName = request.$;
    const userDataFromDb = await userDb.findOne({ name: userName });
    reply.send(userDataFromDb);
};
