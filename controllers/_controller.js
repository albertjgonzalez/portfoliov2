const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

router.get('/',(req,res) =>{
    res.render('landingView', { layout: 'landing' })
})
router.get('/index',(req,res) =>{
    res.render('index')
})
router.post('/send-email',(req,res) =>{
  console.log('hello')
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ajgonzalez1114@gmail.com',
      pass: 'kpvsfknjzfazupsv'
    }
  });
    mailOptions = {
        from: req.body.from,
        to: 'albert@albertjgonzalez.com',
        subject: 'message from: '+req.body.from+' Subject: '+ req.body.subject,
        text: req.body.text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.render('index')
})

module.exports = router;