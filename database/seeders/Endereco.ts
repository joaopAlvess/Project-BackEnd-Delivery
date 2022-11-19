import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Endereco from 'App/Models/Endereco'

export default class extends BaseSeeder {
  public async run () {
    await Endereco.createMany([
      {cep:'78780-123', bairro:'Centro', rua: 'Alto Alegre', uf: 'PR', numero: '22'},
      {cep:'78780-124', bairro:'Santo Onofre', rua: 'Bom Jesus', uf: 'MG', numero: '21'},
      {cep:'78780-143', bairro:'Parque Verde', rua: 'Cascavel', uf: 'SP', numero: '19'},
      {cep:'78780-125', bairro:'Floresta', rua: 'Alegre', uf: 'RJ', numero: '11'},
      {cep:'78780-121', bairro:'Morumbi', rua: 'Novo Mundo', uf: 'RN', numero: '77'},
    ])
  }
}
