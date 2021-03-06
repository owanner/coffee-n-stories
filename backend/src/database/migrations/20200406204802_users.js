exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('username').primary()
        table.string('name').notNullable()
        table.string('cpf', 11).notNullable()
        table.string('birth', 8).notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()
        table.string('cpassword').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
