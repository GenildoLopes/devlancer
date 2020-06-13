'use strict'

// Import Model
const DevUser = use('App/Models/DevUser')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with devusers
 */
class DevUserController {
  /**
   * Show a list of all devusers.
   * GET devusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({view}) {
    const devuser = await DevUser.all()
    return view.render('index',{
      devusers: devuser.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new devuser.
   * GET devusers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({view }) {
    return view.render('create-account')
  }

  /**
   * Create/save a new devuser.
   * POST devusers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {
    const devuser = new DevUser()
    devuser.nome = request.input('name')
    devuser.email = request.input('email')
    devuser.senha = request.input('password')
    // Save Users
    await devuser.save()
    // Session MSG
    session.flash({'notification': 'Perfil criado com sucesso'})
    return response.redirect('/')
  }

  /**
   * Display a single devuser.
   * GET devusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, view }) {
    const devuser = DevUser.find(params.id)
    return view.render('devusers.profile',{
      devuser: devuser.toJSON()
    })
  }

  /**
   * Render a form to update an existing devuser.
   * GET devusers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, view }) {
    const devusers = await DevUser.find(params.id)
    return view.render('devusers.edit-profile', {
      devuser: devuser.toJSON()
    })
  }

  /**
   * Update devuser details.
   * PUT or PATCH devusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {
    const devuser = await DevUser.find(params.id)
    // Get Inputs Values
    devuser.nome = request.input('name')
    devuser.email = request.input('email')
    devuser.senha = request.input('new-password')
    devuser.país = request.input('country')
    devuser.estado = request.input('state')
    devuser.área = request.input('area')
    devuser.descrição = request.input('description')
    devuser.habilidades = request.input('skills')

    // Save
    await devuser.save()
    // Session Msg
    session.flash({'success-msg': 'Perfil Atualizado'})
    return response.redirect('/')
  }

  /**
   * Delete a devuser with id.
   * DELETE devusers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, session }) {
    const devuser = await DevUser.find(params.id)
    // Delete User
    await devuser.delete()
    // Session Msg
    session.flash({'success-msg': 'Usuário deletado'})
    return response.redirect('/home')
  }
}

module.exports = DevUserController
