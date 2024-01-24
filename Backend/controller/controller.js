const userModel = require("../model/schema");

exports.signup = async (req, res) => {

    try {
        const { name, email, password, confirmpassword } = req.body;
        const userinfo = userModel(req.body);
        


        const result = await userinfo.save();
        

       if(!name || !email || !password || !confirmpassword){
          return res.status(400).json({
            success: false,
            message: "Every field is required"
        })
       }




       const validemail =emailvalidator.validate(email);
       if(!validemail){
        return res.status(400).json({
            success: false,
            message: "please provide a valid email"
        })
       }




       if(password !==confirmpassword){
        return res.status(400).json({
            success: false,
            message: "password and confirm password doesn't match"
        })
       }




        const userexists=await userModel.findOne({email})
        if(userexists){
            return   res.status(400).json({
                success: false,
                message: "User Exist"
            })
        }
        

        console.log(name, email, password, confirmpassword);
        res.status(200).json({
            success: true,
            data: result
        })


    } catch (error) {

        console.log(error);
        res.status(400).json({
            success: false,
            message: "User not sign in"
        })
    }

}




exports.signin= async (req,res)=>{
const {email,password} =req.body

if(!email || !password){
    return   res.status(400).json({
        success: false,
        message: "Enter properly email or password"
    })

}
 

const user =await userModel
.findOne({email})
.select('+password');

if(!user || user.password === password){
    return   res.status(400).json({
        success: false,
        message: "Password is wrong or email not exist"
    })
}
}



