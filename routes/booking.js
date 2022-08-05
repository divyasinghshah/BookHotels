const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const Tourist=require('../models/Tourist');


router.get('/:id',async function(req,res){
    try{
        let tourist=await Tourist.findById(req.params.id);
        if(!tourist){
            return res.status(400).json({error:"toruist not found"});
        }
       
        let bookings=await Booking.find({touristId:req.params.id}).populate('touristId').populate('hotelId');
     
        return res.status(200).json(bookings);
        
    }catch(err){
        console.log(err);
        return res.json({error:err});
    }
    
})




module.exports = router;