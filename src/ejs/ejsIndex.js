const fastify = require("fastify")({
    viewEngine: {
      engine: require("ejs"),
      templates: "views"
    }
  });
  
//   fastify.register(require("fastify-ejs"), {
//     root: __dirname + "/views",
//     layout: "layout",
//     viewExt: "ejs",
//     cache: false
//   });
  
  fastify.get("/", (req, reply) => {
    reply.views("./search.ejs");
  });
  
  fastify.listen(3000, err => {
    if (err) throw err;
    console.log(`Server is running on port 3000`);
  });
  