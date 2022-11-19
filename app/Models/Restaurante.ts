import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pedido from './Pedido'
import Pagamento from './Pagamento'

export default class Restaurante extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string
  @column()
  public telefone: string
  @column()
  public cep: string
  @column()
  public pagamentoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=> Pedido )
  public pedidos: HasMany<typeof Pedido>

  @belongsTo( ()=> Pagamento )
  public pagamento: BelongsTo<typeof Pagamento>
}
