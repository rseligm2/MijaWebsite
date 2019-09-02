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
        flex: '1 1 0',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    contImg: {
        width: '100%',
        objectFit: 'cover',
    },
    inputFrame: {
        padding: theme.spacing(4),
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
            <img src={beakers} alt="beakers" className={classes.contImg} />
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
