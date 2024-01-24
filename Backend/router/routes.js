 const express=require('express')
 const authrouter=express.Router()

const {signup,signin}=require("../controller/controller")


 authrouter.post("/signup",signup)
authrouter.get("/signin",signin)

 module.exports=authrouter