import * as Knex from "knex";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

// export const connectionDB=()=> {
//   return Knex({
//     client: "mysql",
//     //version: "5.7",
//     connection:  {
//       host: DB_HOST,
//       user: DB_USER,
//       password: DB_PASSWORD,
//       database: DB_NAME,
//       port: DB_PORT ? Number.parseInt(DB_PORT) : undefined
//    }
//   });
// }

export const knex = require('knex')({
  client: "mysql",
  //version: "5.7",
  connection:  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT ? Number.parseInt(DB_PORT) : undefined
  }
});



