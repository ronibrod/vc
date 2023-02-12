const Fs = require('fs');

module.exports.getHomePage = async (request, reply) => {
    
};

module.exports.postEntryPage = async (request, reply) => {
    const queryText = request.body;
    const queryName = getQueryName();

    try {
        Fs.writeFileSync(`${process.env.TMP_PATH}/${queryName}`, queryText)
    } catch (error) {
        return reply.send(error);
    }
};

module.exports.getEntryPage = async (request, reply) => {
    const queryName = request.query.queryName;
    const queryPath = `${process.env.TMP_PATH}/${queryName}`;

    try {
        const entryText = Fs.readFileSync(queryPath);
        reply.send(entryText);
    } catch (error) {
        return reply.status(400).send(error);
    }
};

module.exports.putEntryPage = async (request, reply) => {

};

const getQueryName = () => {
    const timeStamp = new Date().toISOString();
    return `Query_${timeStamp}0.text`;
};
