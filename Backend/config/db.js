const mongoose=require("mongoose");

const Mongodb_url=process.env.Mongodb_url

const database=()=>{
    mongoose.connect(Mongodb_url)
    .then((conc)=>{
        console.log(`connected toDB:${conc}`);
    })
    .catch((error)=>{
      console.log(error);
    })
}


module.exports=database;