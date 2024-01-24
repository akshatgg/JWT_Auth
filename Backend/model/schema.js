const mongoose=require('mongoose');
const {Schema} =mongoose;

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    require:[true,'Name is required'],
    trim:false,
        maxLength:[20,'Name is less than 20 char']
  },

  email:{
    type:String,
    require:[true,'Name is required'],
        trim:true,
  },
  password:{
    type:String,
    required:[true,'Email is required'],
    minlength: [6, 'Password should be at least 6 characters long'],
    maxlength: [50, 'Password cannot exceed 50 characters'],
    trim:false

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