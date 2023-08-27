import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from 'App/Models/Article'

export default class ArticlesController {
  public async index({}: HttpContextContract) {
    const articles = await Article.query().preload('category')
    return articles
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {
    const article = new Article()
    article.title = 'Test Title'
    article.categoryId = 1
    article.description = 'Test Description'
    article.save()
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
