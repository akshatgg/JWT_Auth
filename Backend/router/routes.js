 const express=require('express')
 const authrouter=express.Router()

const {signup,signin,userinfo}=require("../controller/controller")


authrouter.post("/signup",signup)
authrouter.post("/signin",signin)
authrouter.get("/user",jwtauth,userinfo)
 module.exports=authrouter









