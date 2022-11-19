import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import EnderecoCliente from 'App/Models/EnderecoCliente'

export default class extends BaseSeeder {
  public async run () {
    await EnderecoCliente.createMany([
      {clienteId: 2, enderecoId: 3},
      {clienteId: 1, enderecoId: 2},
      {clienteId: 3, enderecoId: 1},
      {clienteId: 5, enderecoId: 4},
      {clienteId: 4, enderecoId: 5},
      
    ])
  }
}
