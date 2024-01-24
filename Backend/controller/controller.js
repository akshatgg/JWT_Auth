const userModel = require("../model/schema");
const emailvalidator=require("email-validator")

exports.signup = async (req, res, next) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        // Check if any required field is missing
        if (!name || !email || !password || !confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Every field is required"
            });
        }

        // Validate email format
        const validemail = emailvalidator.validate(email);
        if (!validemail) {
            return res.status(400).json({
                success: false,
                message: "Please provide a valid email"
            });
        }

        // Check if password and confirm password match
        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password don't match"
            });
        }

        // Check if user with the same email already exists
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Create a new user
        const userinfo = userModel(req.body);
        const result = await userinfo.save();

        console.log(name, email, password, confirmpassword);
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "User not signed in"
        });
    }
};






















exports.signin= async (req,res)=>{
const {email,password} =req.body

if(!email || !password){
    return   res.status(400).json({
        success: false,
        message: "Enter properly email or password"
    })

}
 

try{

    const user =await userModel
    .findOne({email})
    .select('+password');
    
    if(!user || user.password !== password){
        return   res.status(400).json({
            success: false,
            message: "Password is wrong or email not exist"
        })
    }
    const token=user.jwtToken();
    user.password =undefined;                //not leak//
    
    const cookieoption={
        maxAge:24*60*60*1000,
        httpOnly: true
    };
    
    
    res.cookie("token" , token, cookieoption);
    res.status(200).json({
        success: true,
        data: user
    })
}


catch(error){
    console.log(error);
    res.status(400).json({
        success: false,
        message: "Bad Request"
    })
}



}







