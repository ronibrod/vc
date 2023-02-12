const User = require('../../helpers/userDb');

module.exports.postUser = async (request, reply) => {
    const userData = request.$;
    const newUser = new User(userData);

    try {
        await newUser.save();
        console.log('User saved successfully!');
    } catch (error) {
        console.log(error);
    }
};

module.exports.getUser = async (request, reply) => {
    const userName = request.$;
    try {
        const userDataFromDb = await User.find({ name: userName });
        reply.send(userDataFromDb);
    } catch (error) {
        reply.status(500).send(`failed for creating new user => ${error}`);
    }
};
