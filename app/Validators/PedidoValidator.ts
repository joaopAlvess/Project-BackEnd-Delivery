import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PedidoValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({

    status: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(1),
      rules.alpha(),
    ]),
    item: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(50),
      rules.alphaNum(),
    ]),
    dataPedido: schema.date(),
    pagamentoId: schema.number([
      rules.exists({ table: 'pedidos', column: 'id'})
    ]),
    restauranteId: schema.number([
      rules.exists({ table: 'restaurantes', column: 'id'})
    ]),
    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id'})
    ]),
  })

 
  public messages: CustomMessages = {}
}
