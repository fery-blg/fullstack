const express = require('express')
const router = express.Router()
const authcontr=require("../controllers/auth.controller")




router.get('/check',(req,res)=>{
try {
    res.status(200).json({message:"ok"})
}catch(error){
    res.status(200).json({message:"error"})
}

})
router.post("/register", authcontr.register );


module.exports = router