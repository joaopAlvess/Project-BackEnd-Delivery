import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Entregador from 'App/Models/Entregador'

export default class extends BaseSeeder {
  public async run () {
    await Entregador.createMany([
      {cpf: '888.999.777-89', telefone: '(34)98587-5566', email: 'artur@gmail.com'},
      {cpf: '788.999.777-89', telefone: '(33)98587-5566', email: ''},
      {cpf: '688.999.777-89', telefone: '(32)98587-5566', email: 'luan@gmail.com'},
      {cpf: '588.999.777-89', telefone: '(31)98587-5566', email: ''},
      {cpf: '488.999.777-89', telefone: '(30)98587-5566', email: ''},
    ])
  }
}
