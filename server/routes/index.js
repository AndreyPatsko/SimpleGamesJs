const express = require('express');
const router = express.Router();


router.get('/',function(req,res){
    res.sendFile('./front/index.html');
})


module.exports = router;