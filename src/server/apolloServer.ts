import { ApolloServer, makeExecutableSchema,addMockFunctionsToSchema } from "apollo-server";
import { importSchema } from "graphql-import";
import { resolvers } from "../graphql/resolvers/";

//const typeDefs = importSchema('../schema/index.graphql');
const typeDefs = importSchema('src/graphql/schema/index.graphql');
//const typeDefs = importSchema(__dirname + "/../schema/index.graphql");
const schema = makeExecutableSchema({ typeDefs, resolvers });


// function addMockFunctionsToSchema() {
//   // const mocks = getMocks();
//   // const config = configInDev();
//   return new ApolloServer({
//     schema,
//   });
// }


// addMockFunctionsToSchema({
//   schema,
//   mocks: {},
//   preserveResolvers: false,
// });
// const getMocks = () => {
//   const args = process.argv.slice(2);
//   const mocks = args.find(elem => elem === "--mock") !== undefined;
//   if (mocks) {
//     log("👻  Mocking Graphql Server");
//   }
//   return mocks;
// };

// const configInDev = () => {
//   const dev = process.env.NODE_ENV === "dev";
//   return {
//     playground: dev,
//     introspection: dev
//   };
// };

function apolloServer() {
  // const mocks = getMocks();
  // const config = configInDev();
  return new ApolloServer({
    schema,
  });
}

export const apolloServerInstance = apolloServer();
