var express = require('express');
var router = express.Router();
var nodemailer=require('nodemailer');
require('../models/enquiry'); 
var mongoose = require('mongoose');
var Enquiry = mongoose.model('enqs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// //nodemailer
// router.post('/enquiry', (req, res) => {
//   const output = `
//     <p>You have a  New Enquiry</p>
//     <h3>Enquiry Details</h3>
//     <ul>  
//       <li>Name: ${req.body.name}</li>
//       <li>Email: ${req.body.email}</li>
//       <li>Phone: ${req.body.number}</li>
     
     
     
//     </ul>
//     <h3>Message</h3>
//     <p>${req.body.message}</p>
//   `;
 
//   //create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: 'ak07akashkumar@zoho.com', // generated ethereal user
//         pass: 'Akash@2000'  // generated ethereal password
//     },
//     // tls:{
//     //   rejectUnauthorized:false
//     // }
//   });
 
//   // setup email data with unicode symbols
//   let mailOptions = {
//       from: 'ak07akashkumar@zoho.com', // sender address
//       to: 'ak07akashkumar@gmail.com', // list of receivers
//       subject: 'New Enquiry', // Subject line
//       text: 'From Brandzia Website', // plain text body
//       html: output // html body
//   };
 
//   // send mail with defined transport object
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           return console.log(error);
//       }
//       console.log('Message sent: %s', info.messageId);  
//       console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
//       res.send(`<body style="background-color:gray;"><div style="position:absolute; width : 100%;  height:5rem; text-align:center; font-size:2rem;top:50%;transform:translateY(-50%);">We Saved Your Enquiry. We will get in touch with you soon </div></body>`);
//   });
// });



//database mongod
router.post('/enq',function(req,res) {
  new Enquiry({name :req.body.name,
  email:req.body.email,
  subject:req.body.subject,
message:req.body.message})
.save(function(err,Enquiry){
  console.log('enqs');
  res.send('<h1>your Message has been saved</h1>')
});
});
module.exports=router;
router.get('/schedule', function(req, res, next){
  res.render('schedule', {title: 'espress'});
});

module.exports = router;
