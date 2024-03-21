const mongoose=require('mongoose');


//Schema
const userSchema= new mongoose.Schema({
    Name:{
        type:String,
        required:true

    },
    Email:{
        type:String,
        required:true,
        unique:true

    },
    Password:{
        type:String,
        required:true

    },
     PhoneNumber:{
         type: String ,
     },
     JobTitle:{
            type:String,
        
     },
     gender{
            type:String,
        
     }

});