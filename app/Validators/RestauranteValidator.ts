import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RestauranteValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(50),
      rules.alpha(),
    ]),
    telefone: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(14)
      
    ]),
    cep: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(20)
      
    ]),
    pagamentoId: schema.number([
      rules.exists({ table: 'pagamentos', column: 'id'})
    ])
  })

 
  public messages: CustomMessages = {}
}
