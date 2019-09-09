import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: 400,
        margin: 'auto',
    },
    button: {
        margin: theme.spacing(1, 0),
        color: "#292A5F",
    },
}));

export default function SimpleMenu() {
    const classes = useStyles();

    const links = [
        { to: "/", label: "Home" },
        { to: "/Ingredients", label: "Ingredients" },
        { to: "/About", label: "About" },
        { to: "/Blog", label: "Blog" },
        // { to: "/Customize", label: "Customize" },
        // { to: "/", label: "Contact" },
    ];

    return (
        <div className={classes.root}>
            {links.map(link => (
                <Button
                    key={link.to}
                    className={classes.button}
                    component={Link}
                    to={link.to}
                >
                    {link.label}
                </Button>
            ))}
        </div>
    );
}
