import * as Knex from 'knex'

export const getAllHostals = (db: Knex) => {
    return db
        .select()
        .from('Hostal')
        .then(result => result.map(item => {
            return {
                id: item.id,
                address: item.address,
                name: item.name,
                fullcapacity: item.fullcapacity
            }
        }))

}


// export const getAllHostalsID = (db: Knex, id: number) => {
//     return db
//         .select()
//         .from('Hostal')
//         .where('id',id)
//         .then(result => {
//             return {
//                 id: result[0].id,
//                 address: result[0].address,
//                 name: result[0].name,
//                 fullcapacity: result[0].fullcapacity
//             }
//         })

// }