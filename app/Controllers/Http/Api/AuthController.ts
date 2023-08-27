import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async authenticate({ response }) {
    return response.json({ message: 'working' })
    // const { email, password } = request.body()

    // const loginSchema = schema.create({
    //   email: schema.string({ trim: true }, [rules.email()]),
    //   password: schema.string({ trim: true }, [rules.minLength(6)]),
    // })

    // const loginSchemaMessages = {
    //   required: 'The {{ field }} is required.',
    // }

    // await request.validate({
    //   schema: loginSchema,
    //   messages: loginSchemaMessages,
    // })

    // await auth.use('web').attempt(email, password)
    // return response.redirect().toRoute('dashboard')
  }
}
