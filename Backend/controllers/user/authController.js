const User=require('../../Models/User');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

// signup a new user

exports.signUp=async(req,res)=>{
    try{
        const{name,email,phone,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        const user=new User({name,email,phone,password:hashedPassword});
        await user.save();
        res.json({message:"new user added succesfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

