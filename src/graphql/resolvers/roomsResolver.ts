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
//TODO: Refact the handle error here
export const createRoom = (db: Knex, data:RoomsInput) => {
  console.log(`this is ok`,data)
  return db
    ('Rooms').insert({
      name: data.name,
      capacity: data.capacity,
      id_hostal: data.id_hostal
    })
    .then(() => {
      return data
    })
    .catch((error)=>{
      console.log(`Something was wrong`,error)
    })

}

//TODO: Fix, this there is not id, anymore the query have to be with name rooms and id hostal
export const deleteRoom = (db: Knex, id: number) => {
  return db
    ('Rooms')
    .where('id', id)
    .del()
}

//TODO: Do the same with other object
export const updateRoom = (db: Knex, data:RoomsInput) => {
  return db
    ('Rooms')
    .where({
      'name': data.name,
      'id_hostal':data.id_hostal
    })
    .update({
      capacity: data.capacity
    })
    .then(() => {
      console.log(`Success`)
      return data
    })
    .catch(error=>{
      console.log(`Error`,error)
    })
}