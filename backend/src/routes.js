const express = require('express')

const SessionController = require('./controllers/SessionController')
const UserController = require('./controllers/UserController')
const ProfileController = require('./controllers/ProfileController')
const StoryController = require('./controllers/StoryController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/profile', ProfileController.index)

routes.get('/stories', StoryController.index)
routes.post('/stories', StoryController.create)
routes.delete('/stories/:id', StoryController.delete)

module.exports = routes