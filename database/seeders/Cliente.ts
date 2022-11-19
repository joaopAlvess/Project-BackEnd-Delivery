import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome: 'Marcos', cpf: '111.999.888-55', telefone: '(65)97865-4123', email: 'marcos@gmail.com', sexo: 'M'},
      {nome: 'Paulo', cpf: '222.999.888-55', telefone: '(64)97865-4123', email: 'paulo@gmail.com', sexo: 'M'},
      {nome: 'Luana', cpf: '333.999.888-55', telefone: '(63)97865-4123', email: 'luana@gmail.com', sexo: 'M'},
      {nome: 'Larissa', cpf: '444.999.888-55', telefone: '(62)97865-4123', email: 'larissa@gmail.com', sexo: 'M'},
      {nome: 'Júlio', cpf: '555.999.888-55', telefone: '(61)97865-4123', email: 'julio@gmail.com', sexo: 'M'},
      
    ])
  }
}
