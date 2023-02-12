const fastify = require('fastify')({
    logger: true
  })
  
  fastify.register(require('@fastify/mongodb'), {
    url: 'mongodb://localhost:27017/mydb'
  }, (err) => {
    if (err) throw err
  })

  const collection = fastify.mongo.db.collection('test')
  
  fastify.get('/', async (request, reply) => {
    // const collection = fastify.mongo.db.collection('test')
    const docs = await collection.find({}).toArray()
    reply.send(docs)
  })
  
  // fastify.listen(3000, (err) => {
  //   if (err) throw err
  //   fastify.log.info(`server listening on ${fastify.server.address().port}`)
  // })
  