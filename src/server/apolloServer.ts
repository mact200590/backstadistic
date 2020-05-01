import { ApolloServer, makeExecutableSchema,addMockFunctionsToSchema } from "apollo-server";
import { importSchema } from "graphql-import";
import { resolvers } from "../graphql/resolvers/";
import {knex} from '../bd/bd'

const logger = { log: e => console.log(e) }
const typeDefs = importSchema('src/graphql/schema/index.graphql');

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers,
  logger
});

function apolloServer() {
  return new ApolloServer({
    schema,
    context:{
      knex: knex
    }
  });
}

export const apolloServerInstance = apolloServer();