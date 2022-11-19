import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pagamento from 'App/Models/Pagamento'

export default class extends BaseSeeder {
  public async run () {
    await Pagamento.createMany([
      {preco: '49.90', credito: 'Sim', debito: 'Não', pix: 'Nao', dataPedido: new Date(1/1/2023)},
      {preco: '59.90', credito: 'Não', debito: 'Não', pix: 'Sim', dataPedido: new Date(2/1/2023)},
      {preco: '39.90', credito: 'Sim', debito: 'Não', pix: 'Nao', dataPedido: new Date(3/1/2023)},
      {preco: '29.90', credito: 'Não', debito: 'Sim', pix: 'Nao', dataPedido: new Date(4/1/2023)},
      {preco: '20.90', credito: 'Não', debito: 'Sim', pix: 'Nao', dataPedido: new Date(5/1/2023)},
    ])
  }
}
