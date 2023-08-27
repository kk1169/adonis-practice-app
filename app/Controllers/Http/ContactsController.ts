// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContactsController {
  public async index({ view }) {
    return view.render('contact')
  }
}
