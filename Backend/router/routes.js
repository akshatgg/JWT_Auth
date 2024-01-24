 const express=require('express')
 const authrouter=express.Router()

const {signup,signin}=require("../controller/controller")


 authrouter.post("/signup",signup)
authrouter.post("/signin",signin)

 module.exports=authrouter