import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async authenticate({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body()

    const loginSchema = schema.create({
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string({ trim: true }, [rules.minLength(6)]),
    })

    const loginSchemaMessages = {
      required: 'The {{ field }} is required.',
    }

    await request.validate({
      schema: loginSchema,
      messages: loginSchemaMessages,
    })

    await auth.use('web').attempt(email, password)
    return response.redirect().toRoute('dashboard')
  }

  public async register({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const { name, email, password } = request.body()

    const userSchema = schema.create({
      name: schema.string({ trim: true }, [rules.minLength(4)]),
      email: schema.string({ trim: true }, [rules.email()]),
      password: schema.string({ trim: true }, [rules.minLength(6)]),
    })

    const userSchemaMessages = {
      required: 'The {{ field }} is required.',
    }

    await request.validate({
      schema: userSchema,
      messages: userSchemaMessages,
    })

    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    user.save()

    session.flash('success', 'Category created successfully')
    return response.redirect().toRoute('auth.login')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.use('web').logout()
    return response.redirect().toRoute('auth.login')
  }
}
