const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*')

        return response.json(users)
    },

    async create(request, response) {
        const {
            username,
            name,
            cpf,
            birth,
            email,
            password,
            cpassword
        } = request.body

        await connection('users').insert({
            username,
            name,
            cpf,
            birth,
            email,
            password,
            cpassword
        })

        return response.json({ username })
    }
}