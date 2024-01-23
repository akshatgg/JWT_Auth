const mongoose=require('mongoose');
const {Schema} =mongoose;

const userSchema=new mongoose.Schema({
  name:{
    type:String
  },

  email:{
    type:String
  },
  password:{
    type:String
  },
  forgotpasswordtoken:{
    type:String
  },
  forgotpasswordexpirydare:{
    type:Date
  }
});

const userModel = mongoose.model('user',userSchema);
module.exports = userModel