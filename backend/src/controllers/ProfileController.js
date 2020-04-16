const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const username_id = request.headers.authorization

        const stories = await connection('stories')
            .where('username_id', username_id)
            .select('*')

            return response.json(stories)
    }
}