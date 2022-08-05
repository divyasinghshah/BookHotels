const mongoose=require('mongoose');

const hotelSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        lat:{
            type:Number,
            required:true

        },
        lan:{
            type:Number,
            required:true

        }
    },
    roomCount:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    }
});

const Hotel=mongoose.model('Hotel',hotelSchema);
module.exports=Hotel;
