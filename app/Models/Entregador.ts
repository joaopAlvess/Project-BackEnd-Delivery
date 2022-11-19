import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'

export default class Entregador extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string
  @column()
  public telefone: string
  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany( ()=> Pedido )
  public pedidos: ManyToMany<typeof Pedido>
}
