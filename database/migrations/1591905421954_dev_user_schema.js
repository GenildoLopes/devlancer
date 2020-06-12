'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DevUserSchema extends Schema {
  up () {
    this.create('dev_users', (table) => {
      table.increments()
      table.string('nome', 50).notNullable().unique()
      table.string('email', 60).notNullable().unique()
      table.string('senha', 20).notNullable()
      table.string('país', 20).notNullable()
      table.string('estado', 20).notNullable()
      table.string('área', 30)
      table.text('descrição', 200)
      table.text('habilidades', 200)
      table.integer('pontos', 6)
      table.timestamps()
    })
  }

  down () {
    this.drop('dev_users')
  }
}

module.exports = DevUserSchema
