import { getAllRooms, getRoomsbyID, createRoom } from './roomsResolver';
import { getAllHostals } from './hostalsResolver'
import { getAllCustomers } from './customersResolver'

export const resolvers = {
  Query: {
    rooms: async (parent, args, context, info) => {
      return getAllRooms(context.knex)
    },
    roomsId: async (parent, args, context, info) => {
      return getRoomsbyID(context.knex, 2)
    },
    hostals: async (parent, args, context, info) => {
      return getAllHostals(context.knex)
    },
    customers :async (parent, args, context, info) => {
      return getAllCustomers(context.knex)
    }
  },
  Mutation:{
    RoomsInput: async (parent,args,context,info) => {
       return await createRoom(context.knex,{id:10,id_hostal:1,name: 'room2',capacity:4});
     },
   }

}


