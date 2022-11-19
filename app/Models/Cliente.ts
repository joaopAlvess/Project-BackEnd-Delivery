import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Endereco from './Endereco'
import Pedido from './Pedido'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
  @column()
  public cpf: string
  @column()
  public telefone: string
  @column()
  public email: string
  @column()
  public sexo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany( ()=> Endereco )
  public enderecos: ManyToMany<typeof Endereco>

  @hasMany( ()=> Pedido )
  public pedidos: HasMany<typeof Pedido>

}
