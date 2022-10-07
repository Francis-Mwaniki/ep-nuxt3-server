const verifyToken=require('../verifyToken/verifyToken')
const router=require('express').Router()

router.get('/post',verifyToken,(req,res)=>{
    res.json({message:'welcome to my private page',title:'post blogs',desc:'how to code in nodejs'});
})


module.exports=router;