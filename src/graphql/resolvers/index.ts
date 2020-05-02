import { getAllRooms, getRoomsbyID, createRoom } from './roomsResolver';
import { getAllHostals, getHostalLike } from './hostalsResolver'
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
    customers: async (parent, args, context, info) => {
      return getAllCustomers(context.knex)
    },
    hostalLike: async (parent, args, context, info) => {
      return getHostalLike(context.knex, args.name)
    }
  },
  Mutation: {
    roomsInput: async (parent, args, context, info) => {
      return await createRoom(context.knex, args.id, args.id_hostal, args.name, args.capacity);
    },
  }

}


