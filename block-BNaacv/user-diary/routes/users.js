const express = require('express');
let router = express.Router();
//display all the users  here.....
router.get('/',(req ,res)=>{
    res.fetch('users',{list : ['Rahul thakur' ,'Akash sisodiya' , 'Adarash Raj' ,'Aman']});
})
// display a single user here .....
router.get('/:id',(req ,res)=>{
    // let id = req.params.id;
    //  if we have database then we are going to find like this :
    //  modelname.findById(id, (err , userData)=>{
    //            res.json(usedata);
    //  })
    //  res.send('Delete the use successfully from the database');
    res.fetch('singleUser',{name : "Rahul thakur" , email : "iamrahul079@gamil.com"});
})
// Create a new user  here we have to display a user form 
router.get('/new',(req ,res)=>{

    res.fetch('userForm');
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
exports.module = router;