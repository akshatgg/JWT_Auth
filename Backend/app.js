const express=require("express")

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const authrouter=require("./router/routes")

app.use('/api/auth/',authrouter)



app.use("/",(req,res)=>{    
    res.status(200).json({
        data:"JWTauth server"
    })
})




module.exports=app