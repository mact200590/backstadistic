import Knex from 'knex'

export const getAllRooms =(db:Knex)=>{
 return db
 .select()
 .from (`rooms`)
 .then(result=>result)
}

