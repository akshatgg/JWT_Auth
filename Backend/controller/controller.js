exports.signup=async (req,res)=>{
const {name,email,password,confirmpassword}=req.body;

    try{
        console.log(name,email,password,confirmpassword);
        res.status(200).json({
            success:true,
            data:{}
        })


    }catch(error){
       console.log(error);
       res.status(400).json({
        success:false,
        message:"User not sign in"
       })
    }

}