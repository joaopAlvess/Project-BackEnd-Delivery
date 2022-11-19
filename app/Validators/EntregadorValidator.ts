import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EntregadorValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    cpf:schema.string({}, [
      rules.minLength(1),
      rules.maxLength(14),
    ]),
    telefone:schema.string({}, [
      rules.minLength(1),
      rules.maxLength(14),
      
    ]),
    email:schema.string.optional({}, [
      rules.email(),
      rules.minLength(1),
      rules.maxLength(100),
    ]),
  })

 
  public messages: CustomMessages = {}
}
