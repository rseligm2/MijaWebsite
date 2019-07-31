import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default function ContactInput(){

    function handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"/api/send",
            data: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                resetForm();
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        }).catch(error => {
            console.log(error.message);
        })
    }

    function resetForm(){
        document.getElementById('contact-form').reset();
    }

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            color: "#292A5F",
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 175,
            color: "#292A5F",
        },
        subject: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 380,
        },
    }));
    const classes = useStyles();
    return (
        <form id="contact-form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={classes.container}>
                <TextField
                    id="name"
                    label="Name"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    placeholder="Email"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="subject"
                    label="Subject"
                    placeholder="Subject"
                    className={classes.subject}
                    margin="normal"
                />
                <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows="6"
                    placeholder="Enter message here"
                    className={classes.subject}
                    margin="normal"
                />
            </div>
            <br/>
            <Button type="submit" variant="outlined">Submit</Button>
        </form>
    );

}