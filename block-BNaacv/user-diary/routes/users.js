const express = require('express');
let router = express.Router();
//display all the users  here.....
router.get('/',(req ,res)=>{
    res.render('users',{ list: ["ankit", "suraj", "prashant", "ravi"] });
})
// display a single user here .....
router.get('/:id',(req ,res)=>{
    // let id = req.params.id;
    //  if we have database then we are going to find like this :
    //  modelname.findById(id, (err , userData)=>{
    //            res.json(usedata);
    //  })
    //  res.send('Delete the use successfully from the database');
    res.render('singleUser',{ name: "rahul", email: "rahul@altcampus.io" });
})
// Create a new user  here we have to display a user form 
router.get('/new',(req ,res)=>{

    res.render('userForm');
})

router.delete('/:id',(req ,res)=>{
     let id = req.params.id;
    //  if we have database then we are going to delete :
    //  modelname.delete(id, (err , deletedDocumentData)=>{
    //        res.send('user is deleted successfully');
    //  })
     res.send('Delete the use successfully from the database');
})
// get a query from the  url and updates  the  data 
router.put('/:id',(req ,res)=>{
    let id = req.params.id;
    //  if we have database then we are going to update:
    //  modelname.findAndUpdateById(id,{new : true}, (err , updatedUser)=>{
    //       res.send(udpatedUser.name+ 'is udated Sucessfully');
    //  })
     res.send('Delete the use successfully from the database');
})
module.exports = router;