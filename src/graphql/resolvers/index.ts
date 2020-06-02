import { getAllRooms, getRoomsbyID, createRoom, deleteRoom, updateRoomByID } from './roomsResolver';
import { getAllHostals, getHostalLike,getHostalByID } from './hostalsResolver'
import { getAllCustomers } from './customersResolver'

export const resolvers = {
  Query: {
    rooms: async (parent, args, context, info) => {
      return getAllRooms(context.knex)
    },
    roomsId: async (parent, args, context, info) => {
      return getRoomsbyID(context.knex, args.id)
    },
    hostals: async (parent, args, context, info) => {
      return getAllHostals(context.knex)
    },
    hostalId: async (parent, args, context, info) => {
      return getHostalByID(context.knex,args.id)
    },
    hostalLike: async (parent, args, context, info) => {
      return getHostalLike(context.knex, args.name)
    },
    customers: async (parent, args, context, info) => {
      return getAllCustomers(context.knex)
    }
  },
  Mutation: {
    roomsInput: async (parent, args, context, info) => {
      console.log(`this is `,args.data)
     return await createRoom(context.knex ,args.data);
    },
    roomsDelete: async (parent, args, context, info) => {
      return deleteRoom(context.knex, args.id)
    },
    roomUpdate: async (parent, args, context, info) => {
      return updateRoomByID(context.knex, args.id, args.id_hostal, args.name, args.capacity)
    }

  }
}