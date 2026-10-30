const { getAllApplication, createApplication, getApplication, updateApplication, deleteApplication } = require('../controllers/application-controller')

const route = require('express').Router()


route.get('/', getAllApplication)
route.get('/:id', getApplication)
route.put('/:id', updateApplication)
route.delete('/:id', deleteApplication)
route.post('/', createApplication)


module.exports = route