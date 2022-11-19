import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Entregador from './Entregador'
import Pagamento from './Pagamento'
import Restaurante from './Restaurante'
import Cliente from './Cliente'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: string
  @column()
  public item: string
  @column()
  public dataPedido: Date
  @column()
  public pagamentoId: number
  @column()
  public restauranteId: number
  @column()
  public clienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany( ()=> Entregador )
  public entregadors: ManyToMany<typeof Entregador>

  @belongsTo( ()=> Pagamento )
  public pagamento: BelongsTo<typeof Pagamento>

  @belongsTo( ()=> Restaurante )
  public restaurante: BelongsTo<typeof Restaurante>

  @belongsTo( ()=> Cliente )
  public cliente: BelongsTo<typeof Cliente>
}
