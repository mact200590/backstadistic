import * as Knex from 'knex'

export interface RoomsInterface {
  id: number,
  id_hostal: number,
  name: String,
  capacity: number
}


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

export const createRoom = (db: Knex,id:number, id_hostal: number,name: string,capacity:number) => {
  return db
    ('Rooms').insert({
      id: id,
      id_hostal:id_hostal,
      name: name,
      capacity:capacity
    })
    .returning('id')
}




