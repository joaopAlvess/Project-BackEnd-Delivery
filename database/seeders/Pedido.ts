import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pedido from 'App/Models/Pedido'

export default class extends BaseSeeder {
  public async run () {
    await Pedido.createMany([
      {status: 'A', item: 'Pizza Marguerita', dataPedido: new Date(1/2/2023), pagamentoId: 1, restauranteId: 2, clienteId: 3},
      {status: 'P', item: 'Hambúrguer Artesanal', dataPedido: new Date(2/2/2023), pagamentoId: 2, restauranteId: 1, clienteId: 2},
      {status: 'A', item: 'Combo McDonalds', dataPedido: new Date(3/2/2023), pagamentoId: 3, restauranteId: 3, clienteId: 1},
      {status: 'P', item: 'Espetinho Churrasco', dataPedido: new Date(4/2/2023), pagamentoId: 4, restauranteId: 4, clienteId: 4},
      {status: 'A', item: 'Camarão Empanado', dataPedido: new Date(5/2/2023), pagamentoId: 5, restauranteId: 5, clienteId: 3},
    ])
  }
}
