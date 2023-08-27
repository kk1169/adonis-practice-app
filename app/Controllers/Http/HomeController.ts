// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public async index({ view }) {
    return view.render('home')
  }
}
