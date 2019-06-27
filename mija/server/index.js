const express = require('express');
const cors = require('cors');
// const axios = require('axios');
const creds = require('../config');
const nodemailer = require('nodemailer');
const {json} = require('body-parser');

//initialize
const app = express();
const port = 3001;

app.use(cors());
app.use(json());


const transport = {
    host: 'smtp.mail.us-west-2.awsapps.com',
    port: 465,
    secure: true,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.post('/send', (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const subject = req.body.subject;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;

    const mail = {
        from: 'contact@mijaclean.com',
        to: 'debiseligmann@mijaclean.com',  //Change to email address that you want to receive messages on
        subject: subject,
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.json({
                msg: 'fail'
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
});

app.listen(port, ()=> {
        console.log('Server is listening');
    }
);