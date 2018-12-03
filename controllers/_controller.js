const express = require('express');
var hb = require('express-handlebars').create();
const router = express.Router();

router.get('/',(req,res) =>{
    res.render('landingView', { layout: 'landing' })
})
router.get('/index',(req,res) =>{
    res.render('index')
})


module.exports = router;