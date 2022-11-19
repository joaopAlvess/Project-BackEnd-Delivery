import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagamentoValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    
    preco: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(11),
      
    ]),
    credito: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),
    debito: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),
    pix: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),
    dataPedido: schema.date()
  })

 
  public messages: CustomMessages = {}
}
