const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');


router.get('/showAll', async function (req, res) {
    let hotels = await Hotel.find();
    return res.status(200).json(hotels);
})

router.delete('/delete/:id', async function (req, res) {

    try {
        let hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(400).json({ error: "Not found" });
        }
        hotel = await Hotel.findByIdAndDelete(req.params.id);
        return res.status(200).json({ success: "Deleted Successfully" });

    }catch(err){
        return res.json(err);
    }

    
});


module.exports = router;