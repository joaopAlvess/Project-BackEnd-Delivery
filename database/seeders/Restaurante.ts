import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Restaurante from 'App/Models/Restaurante'

export default class extends BaseSeeder {
  public async run () {
    await Restaurante.createMany([
      {nome: 'Meatz', telefone: '(61)99665-8996', cep: '70000-369', pagamentoId: 1},
      {nome: 'Coco Bambu', telefone: '(60)99665-8996', cep: '73000-369', pagamentoId: 2},
      {nome: 'Madero', telefone: '(50)99665-8996', cep: '71000-369', pagamentoId: 3},
      {nome: 'LifeBox', telefone: '(80)99665-8996', cep: '78000-369', pagamentoId: 4},
      {nome: 'Ligeiro', telefone: '(67)99665-8996', cep: '75000-369', pagamentoId: 5},
    ])
  }
}
