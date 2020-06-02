import * as Knex from 'knex'
import {RoomsInput} from '../typesGQL'

export const getAllRooms = (db: Knex) => {
  return db
    .select()
    .from('Rooms')
    .then(result => result.map(item => {
      return {
        id: item.id,
        id_hostal: item.id_hostal,
        name: item.name,
        capacity: item.capacity
      }
    }))

}

export const getRoomsbyID = (db: Knex, id: number) => {
  return db
    .select()
    .from('Rooms')
    .where('id', id)
    .then(result => {
      return {
        id: result[0].id,
        id_hostal: result[0].id_hostal,
        name: result[0].name,
        capacity: result[0].capacity
      }
    }
    )
}
//TODO: Pass Unic Objet type somethin like this data:RoomInput,this object contains id, ..etc 
export const createRoom = (db: Knex, data:RoomsInput) => {
  console.log(`this is ok`,data)
  return db
    ('Rooms').insert({
      name: data.name,
      capacity: data.capacity,
      id_hostal: data.id_hostal
    })
    //.returning(['id_hostal'])
    .then(result => {
      console.log(`this`, result[0])
      return result[0]
    })

}

//TODO: Do the same with other object
export const deleteRoom = (db: Knex, id: number) => {
  return db
    ('Rooms')
    .where('id', id)
    .del()
}

//TODO: Do the same with other object
export const updateRoomByID = (db: Knex, id: number, id_hostal: number, name: string, capacity: number) => {
  return db
    ('Rooms')
    .where('id', id)
    .update({
      id: id,
      id_hostal: id_hostal,
      name: name,
      capacity: capacity
    })
    .then(result => {
      console.log(`Success`)
    })
}