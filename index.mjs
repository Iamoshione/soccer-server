import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.mjs";
import { resolvers } from "./resolvers.mjs";

const API_PORT = process.env.PORT || 403;
const API_HOST = process.env.HOST || '192.168.40.204'

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({ port: API_PORT ,host:API_HOST })
    .then(({ url }) => {
        console.log("Server is ready at " + url);
    })
    .catch((err) => {
        console.error("Error starting server:", err);
    });