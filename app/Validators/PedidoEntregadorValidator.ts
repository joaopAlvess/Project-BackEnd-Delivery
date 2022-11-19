import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidoEntregadorValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

   pedidoId: schema.number([
    rules.exists({ table: 'pedidos', column: 'id'})
  ]),
   entregadorId: schema.number([
    rules.exists({ table: 'entregadors', column: 'id'})
  ]),
  })

 
  public messages: CustomMessages = {}
}
