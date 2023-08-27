import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ view }: HttpContextContract) {
    const categories = await Category.all()
    return view.render('category/list', { categories })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('category/create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const { title } = request.body()

    const categorySchema = schema.create({
      title: schema.string({ trim: true }, [rules.minLength(4)]),
    })

    const categorySchemaMessages = {
      required: 'The {{ field }} is required.',
    }

    await request.validate({
      schema: categorySchema,
      messages: categorySchemaMessages,
    })

    const category = new Category()
    category.title = title
    category.save()

    session.flash('success', 'Category created successfully')
    return response.redirect().toRoute('category.list')
  }

  public async show({}: HttpContextContract) {}

  public async edit({ view, request }: HttpContextContract) {
    const category = await Category.find(request.param('id'))
    return view.render('category/edit', { category })
  }

  public async update({ request, response, session }: HttpContextContract) {
    const { title } = request.body()
    const category = await Category.findOrFail(request.param('id'))
    const categorySchema = schema.create({
      title: schema.string({ trim: true }, [rules.minLength(4)]),
    })

    const categorySchemaMessages = {
      required: 'The {{ field }} is required.',
    }

    await request.validate({
      schema: categorySchema,
      messages: categorySchemaMessages,
    })

    category.title = title
    category.save()

    session.flash('success', 'Category updated successfully')
    return response.redirect().toRoute('category.list')
  }

  public async destroy({ request, response, session }: HttpContextContract) {
    const category = await Category.findOrFail(request.param('id'))
    await category.delete()

    session.flash('success', 'Category deleted successfully')
    return response.redirect().toRoute('category.list')
  }
}
