const express =require("express")
const mainRoute=express.Router()
const authRouter=require("../../auth/rout")


mainRoute.use('/auth',authRouter)


module.exports=mainRoute