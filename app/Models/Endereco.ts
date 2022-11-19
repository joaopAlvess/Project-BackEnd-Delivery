import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cep: string
  @column()
  public bairro: string
  @column()
  public rua: string
  @column()
  public uf: string
  @column()
  public numero: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany( ()=> Endereco )
  public enderecos: ManyToMany<typeof Endereco>
}
