import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnderecoClienteValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id'})
    ]),
    enderecoId: schema.number([
      rules.exists({ table: 'enderecos', column: 'id'})
    ])
  })

 
  public messages: CustomMessages = {}
}
