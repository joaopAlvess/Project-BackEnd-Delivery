// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Restaurante from "App/Models/Restaurante"
import RestauranteValidator from "App/Validators/RestauranteValidator"

export default class RestaurantesController {

    index() {
        return Restaurante.query().paginate(1)
    }

   async store({request}) {
         const data = await request.validate(RestauranteValidator)
         return Restaurante.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Restaurante.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const restaurante = await Restaurante.findOrFail(id)

        return restaurante.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const restaurante = await Restaurante.findOrFail(id)

        const dados = request.only([
            'nome', 
            'telefone', 
            'cep',
            'pagamentoId'
        ])

        restaurante.merge(dados)

        return restaurante.save()

    }
}
