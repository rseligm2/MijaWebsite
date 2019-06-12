import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 175,
    },
    subject: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 380,
    },
}));

export default function ContactInput() {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.container} noValidate autoComplete="off">
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
            </form>
            <br/>
            <Button variant="outlined">Submit</Button>
        </div>
    );
}