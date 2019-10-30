import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 600,
        maxWidth: '100%',
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
        { href: "https://www.surveymonkey.com/r/MijaCleanOrder", label: "Order Now" },
        { to: "/About", label: "About" },
        { to: "/Blog", label: "Blog" },
        // { to: "/Customize", label: "Customize" },
        // { to: "/", label: "Contact" },
    ];

    return (
        <div className={classes.root}>
            {links.map(({ to, href, label }, i) => (
                <Button
                    key={i}
                    className={classes.button}
                    component={to ? Link : 'a'}
                    to={to}
                    href={href}
                    target={href && '_blank'}
                    rel={href && 'noreferrer noopener'}
                >
                    {label}
                </Button>
            ))}
        </div>
    );
}
