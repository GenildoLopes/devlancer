'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Database = use('Database')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Home (Users not logged)
Route.on('/').render('home')
// Index


/* ----------- Users -----------*/

// Create Account
Route.on('/create-account').render('create-account')
// Register Post Route
Route.post('/register', 'AuthController.register')
// Login
Route.on('/login').render('login')
// Authentication
Route.post('/auth', 'AuthController.authenticate')

/* ----------- Dev Users -----------*/
Route.group(()=>{
    Route.resource('devusers', 'DevUserController')
})

