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
            lineHeight: '5',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            fontSize: '1.8vw',
            lineHeight:'1vw',
            width: '10vw',
            color: "#292A5F",
        },
        subject: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 380,
        },
        button: {
            width: '20vw',
        }
    }));
    const classes = useStyles();
    return (
        <form id="contact-form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <div className={classes.container}>
                <TextField
                    id="name"
                    label="Name"
                    margin="dense"
                    placeholder="Name"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Email"
                    margin="dense"
                    placeholder="Email"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="subject"
                    label="Subject"
                    margin="dense"
                    placeholder="Subject"
                    className={classes.subject}
                    margin="normal"
                />
                <TextField
                    id="message"
                    label="Message"
                    margin="dense"
                    multiline
                    rows="6"
                    placeholder="Enter message here"
                    className={classes.subject}
                    margin="normal"
                />
            </div>
            <br/>
            <Button type="submit" className={classes.button} variant="outlined">Submit</Button>
        </form>
    );

}