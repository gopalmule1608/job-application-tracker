const { getApplication } = require('../controllers/application-controller')

const route = require('express').Router()


route.get('/', getApplication)


module.exports = route