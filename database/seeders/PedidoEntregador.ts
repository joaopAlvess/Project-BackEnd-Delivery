import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import PedidoEntregador from 'App/Models/PedidoEntregador'

export default class extends BaseSeeder {
  public async run () {
    await PedidoEntregador.createMany([
      {pedidoId: 1, entregadorId: 2},
      {pedidoId: 2, entregadorId: 1},
      {pedidoId: 4, entregadorId: 3},
      {pedidoId: 5, entregadorId: 4},
      {pedidoId: 3, entregadorId: 5},
    ])
  }
}
