var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'ok2282node@hotmail.com',
    pass: 'Tyoung518!'
  }
});

var mailOptions = {
  from: 'ok2282node@hotmail.com',
  to: 'ejp.peters@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>https://jstris.jezevec10.com/join/XPSU9E</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});