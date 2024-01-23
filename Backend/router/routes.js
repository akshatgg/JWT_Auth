 const express=require('express')
 const authrouter=express.Router()

const {signup}=require("../controller/controller")


 authrouter.post("/signup",signup)


 module.exports=authrouter