// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {

    index() {
        return Cliente.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(ClienteValidator)
         return Cliente.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Cliente.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cpf', 
            'telefone',
            'email',
            'sexo'
        ])

        cliente.merge(dados)

        return cliente.save()

    }
}
