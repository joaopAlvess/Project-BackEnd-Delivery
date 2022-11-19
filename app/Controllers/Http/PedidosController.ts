// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pedido from "App/Models/Pedido"
import PedidoValidator from "App/Validators/PedidoValidator"

export default class PedidosController {

    index() {
        return Pedido.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(PedidoValidator)
         return Pedido.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Pedido.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pedido = await Pedido.findOrFail(id)

        return pedido.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const pedido = await Pedido.findOrFail(id)

        const dados = request.only([
            'status', 
            'item', 
            'dataPedido',
            'pagamentoId',
            'restauranteId',
            'clienteId',
        ])

        pedido.merge(dados)

        return pedido.save()

    }
}
