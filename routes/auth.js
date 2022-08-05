const express = require("express");
const router = express.Router();
const Tourist = require("../models/Tourist");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');



router.post("/create-user", async function (req, res) {
  let success = false;
  try {
    let tourist = await Tourist.findOne({ email: req.body.email });
    if (tourist) {
      return res
        .status(400)
        .json({ success, error: "Sorry this user already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    success = true;
    let secPass = await bcrypt.hash(req.body.password, salt);

    success = true;
    tourist = await Tourist.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });
    const data = {
      tourist: {
        id: tourist.id
      }
    }
    const JWT_SECRERT = "Divya";
    var token = jwt.sign(data, JWT_SECRERT);

    return res.json({ success, token });




  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

router.post("/login", async function (req, res) {


  let success = false;
  try {
    let tourist = await Tourist.findOne({ email: req.body.email });
    if (!tourist) {
      return res.json({ success, error: "Invalid Credentials" });
    }
    const passwordCompare = await bcrypt.compare(
      req.body.password,
      tourist.password
    );
    if (!passwordCompare) {
      return res.json({ success, error: "Incorrect password" });
    }
    success = true;
    const data = {
      tourist: {
        id: tourist.id,
      },
    };
    const JWT_SECRERT = "Divya";
    var token = jwt.sign(data, JWT_SECRERT);

    return res.json({ success, token });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});

module.exports = router;
