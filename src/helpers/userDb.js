const Mongoose = require('mongoose');

const createSchema = () => {
    const Schema = Mongoose.Schema;

    const userSchema = new Schema({
        name: String,
        email: String,
        password: String,
    });

    const User = Mongoose.model('User', userSchema);
    return User;
};

module.exports = createSchema();
