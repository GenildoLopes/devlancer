'use strict'

// Call User Model
const User = use('App/Models/User')

class AuthController {
    // User register
    async register({request}) {
        const data = request.only(['username, email, password'])

        const user = await User.create(data)

        return user
    }

    // Authentication
    async authenticate({request, auth}) {
        const {email, password} = request.all()
    }

}

module.exports = AuthController
