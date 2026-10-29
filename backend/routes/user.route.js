const { register, login } = require("../controllers/user-controller");

const route = require("express").Router()


route.post('/register', register)
route.post('/login', login)


module.exports = route;