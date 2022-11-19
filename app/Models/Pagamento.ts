import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Restaurante from './Restaurante'
import Pedido from './Pedido'

export default class Pagamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public preco: string
  @column()
  public credito: string
  @column()
  public debito: string
  @column()
  public pix: string
  @column()
  public dataPedido: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=> Restaurante )
  public restaurantes: HasMany<typeof Restaurante>

  @hasMany( ()=> Pedido )
  public pedidos: HasMany<typeof Pedido>

}
