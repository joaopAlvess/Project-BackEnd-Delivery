// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Entregador from "App/Models/Entregador"
import EntregadorValidator from "App/Validators/EntregadorValidator"

export default class EntregadorsController {

    index() {
        return Entregador.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(EntregadorValidator)
         return Entregador.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Entregador.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const entregador = await Entregador.findOrFail(id)

        return entregador.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const entregador = await Entregador.findOrFail(id)

        const dados = request.only([ 
            'cpf', 
            'telefone',
            'email'
        ])

        entregador.merge(dados)

        return entregador.save()

    }
}
