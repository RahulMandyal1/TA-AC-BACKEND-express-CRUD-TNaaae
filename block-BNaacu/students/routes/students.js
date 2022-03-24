const express = require('express');
let router =  express.Router();
router.get('/new',(req ,res)=>{
    res.send('Showed the user form  here');
})
router.post('' ,(req ,res)=>{
    res.send('this is  the first Request of mine');
})

router.get('',(req ,res)=>{
    res.render('users');
})

module.exports = router;