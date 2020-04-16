exports.up = function (knex) {
    return knex.schema.createTable('stories', function (table) {
        table.increments()
        table.string('title').notNullable()
        table.string('summary').notNullable()
        table.string('genre').notNullable()
        table.string('story').notNullable()

        table.string('username_id').notNullable()
        table.string('author').notNullable()

        table.foreign('username_id').references('username').inTable('users')
        table.foreign('author').references('name').inTable('users')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('stories')
};
