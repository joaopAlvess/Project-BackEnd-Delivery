// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pagamento from "App/Models/Pagamento"
import PagamentoValidator from "App/Validators/PagamentoValidator"

export default class PagamentosController {

    index() {
        return Pagamento.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(PagamentoValidator)
         return Pagamento.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Pagamento.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const pagamento = await Pagamento.findOrFail(id)

        return pagamento.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const pagamento = await Pagamento.findOrFail(id)

        const dados = request.only([
            'preco', 
            'credito', 
            'debito',
            'pix',
            'dataPedido'
        ])

        pagamento.merge(dados)

        return pagamento.save()

    }
}
