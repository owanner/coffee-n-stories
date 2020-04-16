const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { username, password } = request.body

        const user = await connection('users')
            .where('username', username)
            .where('password', password)
            .select('name')
            .first()

        if (!user) {
            return response.status(400).json({ error: "No User found with this username or password" })
        }

        return response.json(user)
    }
}