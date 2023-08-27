/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import AuthController from 'App/Controllers/Http/Api/AuthController'

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'HomeController.index').as('home')
Route.get('/contact', 'ContactsController.index').as('contact')

// auth
Route.group(() => {
  Route.get('/login', 'AuthController.login').as('auth.login')
  Route.post('/login', 'AuthController.authenticate').as('auth.authenticate')

  Route.get('/register', 'AuthController.register').as('auth.register')
  Route.post('/register', 'AuthController.store').as('auth.store')
}).prefix('/auth')

// auth
Route.group(() => {
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  // Route.get('/login', 'AuthController.login').as('auth.login')
  Route.post('/login', new AuthController().authenticate)

  // Route.get('/register', 'AuthController.register').as('auth.register')
  // Route.post('/register', 'AuthController.store').as('auth.store')
}).prefix('/api')

Route.group(() => {
  Route.get('/logout', 'AuthController.logout').as('auth.logout')

  Route.get('/dashboard', 'DashboardController.index').as('dashboard')

  // Category
  Route.group(() => {
    Route.get('/', 'CategoriesController.index').as('category.list')
    Route.get('/create', 'CategoriesController.create').as('category.create')
    Route.post('/store', 'CategoriesController.store').as('category.store')
    Route.get('/:id/edit', 'CategoriesController.edit').as('category.edit')
    Route.post('/:id/update', 'CategoriesController.update').as('category.update')
    Route.get('/:id/delete', 'CategoriesController.destroy').as('category.delete')
  }).prefix('/category')

  // Category
  Route.group(() => {
    Route.get('/', 'ArticlesController.index').as('article.list')
    Route.get('/store', 'ArticlesController.store').as('article.store')
  }).prefix('/article')

  // endauth
}).middleware('auth')

// Route.get('dashboard', async ({ auth, response }) => {
//   await auth.use('web').authenticate()

//   // ✅ Request authenticated
//   console.log(auth.user!)
//   return auth.user
// }).as('dashboard')
