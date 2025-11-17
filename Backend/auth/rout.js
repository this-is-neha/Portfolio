
const authRoute = require("express").Router();
const authCtrl=require("./auth.js")



authRoute.post('/', authCtrl.register)

module.exports = authRoute