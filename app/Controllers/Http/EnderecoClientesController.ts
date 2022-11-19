// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import EnderecoCliente from "App/Models/EnderecoCliente"
import EnderecoClienteValidator from "App/Validators/EnderecoClienteValidator"

export default class EnderecoClientesController {

    index() {
        return EnderecoCliente.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(EnderecoClienteValidator)
         return EnderecoCliente.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return EnderecoCliente.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const enderecoCliente = await EnderecoCliente.findOrFail(id)

        return enderecoCliente.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const enderecoCliente = await EnderecoCliente.findOrFail(id)

        const dados = request.only([
            'clienteId', 
            'enderecoId', 
        ])

        enderecoCliente.merge(dados)

        return enderecoCliente.save()

    }
}
