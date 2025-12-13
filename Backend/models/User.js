const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    phone:String,

    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },

    addresses:[
        {
            fullName:String,
            phone:String,
            house:String,
            city:String,
            state:String,
            pincode:String,
            country:String
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now
    } 



},{timestamps: true});