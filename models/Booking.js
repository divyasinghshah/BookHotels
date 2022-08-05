const mongoose=require('mongoose');

const bookingSchema= new mongoose.Schema({
    hotelId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hotel'
    },
    touristId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tourist'
    },
    arrival:{
        type:Date,
        required:true
    },
    departure:{
        type:Date,
        required:true

    },
    rooms:{
        type:Number,
        required:true
    }
});

const Booking=mongoose.model('Booking',bookingSchema);
module.exports=Booking;
