const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('stories')
            .count()

        const stories = await connection('stories')
            .join('users', 'users.username', '=', 'stories.username_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'stories.*',
                'users.name',
                'users.email'
            ])

        response.header('X-Total-Count', count['count(*)'])

        return response.json(stories)
    },

    async create(request, response) {
        const {
            title,
            summary,
            genre,
            story,
            author
        } = request.body

        const username_id = request.headers.authorization

        const [id] = await connection('stories').insert({
            title,
            summary,
            genre,
            story,
            author,
            username_id
        })

        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params
        const username_id = request.headers.authorization

        const story = await connection('stories')
            .where('id', id)
            .select('username_id')
            .first()

        if (story.username_id != username_id) {
            return response.status(401).json({ error: 'Operation not permitted' })
        }

        await connection('stories').where('id', id).delete()

        return response.status(204).send()
    }
}