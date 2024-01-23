const userModel = require("../model/schema");

exports.signup = async (req, res) => {

    try {
        const { name, email, password, confirmpassword } = req.body;
        const userinfo = userModel(req.body);

        const result = await userinfo.save();

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



