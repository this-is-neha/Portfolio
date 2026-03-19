
const authRoute = require("express").Router();
const authCtrl=require("./auth.js")
const { createMessage} = require("./auth.controller.js")
authRoute.post('/', authCtrl.register)
authRoute.post('/create',createMessage )

module.exports = authRoute