import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EnderecoValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  
  public schema = schema.create({

    cep:schema.string({}, [
      rules.minLength(1),
      rules.maxLength(20),
      
    ]),
    bairro:schema.string({}, [
      rules.minLength(1),
      rules.maxLength(50),

    ]),
    rua:schema.string({}, [
      rules.minLength(1),
      rules.maxLength(50),
      
    ]),
    uf:schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(2),
      rules.alpha(),
    ]),
    numero:schema.string.optional({}, [
      rules.minLength(1),
      rules.maxLength(5),
      
    ]),
  })

 
  public messages: CustomMessages = {}
}
