'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevUserSchema extends Schema {
  up () {
    this.create('dev_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('dev_users')
  }
}

module.exports = DevUserSchema
