// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TodosController {
  public async index({ view }) {
    return view.render('todo.list')
  }
}
