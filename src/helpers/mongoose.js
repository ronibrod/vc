const Mongoose = require('mongoose');
Mongoose.set('strictQuery', true);

const startMongoos = async () => {
    try {
        await Mongoose.connect('mongodb://localhost:27017/vc', { useNewUrlParser: true });
        console.log('mongoose is working');
    } catch (error) {
        console.log(error);
    }
};

module.exports = startMongoos;
