const express=require('express');
const router=express.Router();
const Tourist=require('../models/Tourist');


router.get('/:id',async function (req,res){
    let tourist=await Tourist.findById(req.params.id);
    if(!tourist){
        return res.status(400).json({error:"Not found"});
    }

    return res.status(200).json({tourist});
})


module.exports=router;