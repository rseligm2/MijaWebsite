import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';

const useStyles = makeStyles(theme => ({
    marginRight: {
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(1),
        },
    },
    marginLeft: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
        },
    },
    button: {
        minWidth: '20vw',
    }
}));

export default function ContactInput() {

    function handleSubmit(e) {
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

    function resetForm() {
        document.getElementById('contact-form').reset();
    }

    const classes = useStyles();

    return (
        <form id="contact-form" onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="name"
                        label="Name"
                        placeholder="Name"
                        className={classes.marginRight}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="email"
                        label="Email"
                        placeholder="Email"
                        className={classes.marginLeft}
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="subject"
                        label="Subject"
                        placeholder="Subject"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        rows="6"
                        placeholder="Enter message here"
                        margin="normal"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <br/>
                <Grid xs={12}>
                    <Button type="submit" className={classes.button} variant="outlined">Submit</Button>
                </Grid>
            </Grid>
        </form>
    );
}
