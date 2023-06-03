const express = require('express');
const router = express.Router()

var credential = {
    email : 'dlpkmr706@gmail.com',
    password : '123'
}

router.get('/',(req,res)=>{
    res.render('base',{title:'Login system'})
});


router.post('/login',(req,res)=>{
    
    if(req.body.email == credential.email && req.body.password == credential.password){
         req.session.user = req.body.email
         res.redirect('/dashbord')
     }else{
        res.render('base',{invalid : "invalid email id or password"})
    }
})

 module.exports = router;