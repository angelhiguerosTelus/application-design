async function routes (fastify, options) {
    fastify.get('/', async (request, reply) => {
      return { hello: 'Hello word!' }
    })
  }
  
  module.exports = routes