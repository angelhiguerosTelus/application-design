import Fastify from "fastify";
import firstRoute from './our-first-route'

const fastify = Fastify({
  logger: true,
});


fastify.register(firstRoute)

// fastify.get("/", function (request, reply) {
//   reply.send({ hello: "world" });
// });

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
