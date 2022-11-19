import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('status', 1).notNullable()
      table.string('item', 50).notNullable()
      table.timestamp('data_pedido', { useTz: true }).notNullable()
      table.integer('pagamento_id').unsigned().references('id').inTable('pagamentos').notNullable()
      table.integer('restaurante_id').unsigned().references('id').inTable('restaurantes').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
