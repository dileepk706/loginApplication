const express = require('express');
const session = require('express-session');
const router = express.Router()

router.get('/',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            res.render('base',{title:"Logout Express",logout:'logout succesfully...'})
        }
    })})

    module.exports=router;