const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title:String,
    description:String,

    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand"
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },

    mrp:Number,
    price:Number,
    discount:{
        type:Number,
        default:0
    },

    stock:Number,
    sold:{
        type:Number,
        default:0
    },

    images:[
        {
            url:String
        }
    ],

    specifications: {
        processor: String,
        ram: String,
        storage: String,
        display: String,
        battery: String,
        os: String
    },

    reviews: [
        {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        rating: Number,
        comment: String
        }
    ],
},{ timestamps: true });