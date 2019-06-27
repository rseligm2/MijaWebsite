import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function SimpleMenu() {
    const classes = useStyles();
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none' }}><Button className={classes.button}>Home</Button></Link>
            <Link to="/Ingredients" style={{ textDecoration: 'none' }}><Button className={classes.button}>Ingredients</Button></Link>
            <Button className={classes.button}>Customize</Button>
            {/*<Button className={classes.button}>Blog</Button>*/}
            <Button className={classes.button}>Contact</Button>
            {/*<Button className={classes.button}>About</Button>*/}
        </div>
    );
}