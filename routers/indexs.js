const express = require('express');
const router = express.Router();

router.get(['','/','/index','/welcome'], (req,res)=>{
    res.send('<h1>Welcome to My Express APIs</h1>');
})

module.exports = router;