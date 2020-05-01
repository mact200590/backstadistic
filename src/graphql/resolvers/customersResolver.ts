import * as Knex from 'knex'

export const getAllCustomers = (db: Knex) => {
    return db
        .select()
        .from('Customers')
        .then(result => {
            result.map(item => {
                return {
                    passport: item.passport,
                    name: item.name,
                    age: item.age,
                    country: item.country,
                    sexo: item.sexo
                }

            })
        })
}