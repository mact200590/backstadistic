
import { apolloServerInstance } from "./server/apolloServer";
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
//const { ApolloServer, gql } = require('apollo-server');
//const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
apolloServerInstance.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});





// import { log } from "./utils/logging";
// import CronModel from "./model/cronjob.model";

// apolloServerInstance.listen(process.env.PORT || 4000).then(({ url }) => {
//   log("🚀  Server is running on %o", url);
// });

// // cron services
// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "staging"
// ) {
//   const cron = new CronModel();
//   cron.initLinkUserCron();
// }
