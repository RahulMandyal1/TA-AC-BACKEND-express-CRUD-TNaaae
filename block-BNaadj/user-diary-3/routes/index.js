// all stand alone routes are going to be handled  here 
const express = require('express');
const router = express.Router();

router.get('/' , (req ,res)=>{
     res.render('index');
})

module.exports = router;

