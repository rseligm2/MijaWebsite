import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import beakers from "../../resources/beakers.jpg";
import ContactInput from "./ContactInput";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fcfcf4',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    imgContainer: {
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },
    contImg: {
        width: '100%',
        objectFit: 'cover',
    },
    inputFrame: {
        padding: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            width: '50%',
            padding: theme.spacing(4),
        },
    },
    contHeader: {
        fontWeight: 'lighter',
        color: '#3667C2',
    },
}));

export default function Contact(props) {
    const classes = useStyles();
    const { isMobile } = props;

    return (
        <div className={classes.root}>
            <div className={classes.imgContainer}>
                <img src={beakers} alt="beakers" className={classes.contImg} />
            </div>
            <div className={classes.inputFrame}>
                <Typography
                    variant={isMobile ? "h4" : "h3"}
                    className={classes.contHeader}
                >
                    CONTACT US
                </Typography>
                <ContactInput />
            </div>
        </div>
    );
}

Contact.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};
