const express = require('express');
const router = express.Router()

router.get('/',(req,res)=>{
    if(req.session.user){
        res.render('dashbord',{user :req.session.user})
    }else{
        res.send('unotherised user')
    }
 })

module.exports = router;