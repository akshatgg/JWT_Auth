 const express=require('express')
 const authrouter=express.Router()
const jwtauth=require('../middleware/jwtauth')
const {signup,signin,userinfo,logout}=require("../controller/controller")


authrouter.post("/signup",signup)
authrouter.post("/signin",signin)
authrouter.get("/user",jwtauth,userinfo)
authrouter.get('/logout',jwtauth,logout)


module.exports=authrouter









