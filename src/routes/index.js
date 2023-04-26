const router=require('express').Router();

//Routes
router.get('/',(req,res)=>{
    res.render('index');

});

module.exports=router;