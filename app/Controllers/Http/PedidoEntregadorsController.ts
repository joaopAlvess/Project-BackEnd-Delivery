// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import PedidoEntregador from "App/Models/PedidoEntregador"
import PedidoEntregadorValidator from "App/Validators/PedidoEntregadorValidator"

export default class PedidoEntregadorsController {

    index() {
        return PedidoEntregador.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(PedidoEntregadorValidator)
         return PedidoEntregador.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return PedidoEntregador.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pedidoEntregador = await PedidoEntregador.findOrFail(id)

        return pedidoEntregador.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const pedidoEntregador = await PedidoEntregador.findOrFail(id)

        const dados = request.only([
            'pedidoId', 
            'entregadorId', 
        ])

        pedidoEntregador.merge(dados)

        return pedidoEntregador.save()

    }
}
