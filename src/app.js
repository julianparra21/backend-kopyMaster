
const express = require('express');
const path = require('path');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const myConnection = require('express-myconnection');
 const port = 3000;

// Importing routes
const customerRoutes = require('./routes/customer');



//settings
dotenv.config();
app.set('port', process.env.PORT || port);


//middlewares
app.use(myConnection(mysql,{
    host: process.env.hostDB,
    user: process.env.userDB,
    password: process.env.passwordDB,
    port: process.env.portDB,
    database: process.env.db
}, 'single'));
app.use(express.urlencoded({extended: false}));


//config send email
// const transporter = nodemailer.createTransport({
//   host: process.env.hostEmail,
//   port: process.env.portEmail,
//   user: process.env.userEmail,
//   password: process.env.passwordEmail
// });

//routes
app.use('/', customerRoutes);

//static files



app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${process.env.PORT} `);
});
