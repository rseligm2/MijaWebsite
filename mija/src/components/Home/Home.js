import React from 'react';

import { makeStyles } from '@material-ui/core/styles'; 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';

import aloebeaker from '../../resources/aloe_in_beaker.jpg';

import Ingredients from "../Ingredients/Ingredients";
import Contact from "../Contact/Contact";


const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: '100%',
    },
    imageDiv: {
        margin: 'auto',
        width: '100%',
        background: `url(${aloebeaker})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
    },
    textDiv: {
        marginLeft: 'auto',
        backgroundColor: 'rgba(255, 255, 255, .5)',
        [theme.breakpoints.up('sm')]: {
            width: '50%',
        },
    },
    innerTextDiv: {
        width: '70%',
        marginLeft: '15%',
        marginRight: 'auto',
        textAlign: 'left',
        fontFamily: 'Roboto, sans-serif',
        padding: theme.spacing(3, 0),
    },
    header: {
        color: '#3667C2',
    },
    introText: {
        fontWeight: 'lighter',
        color: '#292A5F',
    },
    info: {
        margin: theme.spacing(2, 0),
        fontWeight: 'lighter',
        color: '#292A5F',
    },
}));

export default function Home() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className={classes.root}>
            <div className={classes.imageDiv}>
                <div className={classes.textDiv}>
                    <div className={classes.innerTextDiv}>
                        <Typography variant={isMobile ? "h4" : "h2"} className={classes.header}>NATURAL, PERSONALIZED HAIR CARE</Typography>
                        <Typography variant="h5" className={classes.introText}>Nourish, replenish and rejuvenate</Typography>

                        <Typography variant="body1" className={classes.info}>It starts with our carefully formulated shampoo base sourced from 100% plant-based, renewable and biodegradable ingredients.  Sulfate-free and fragrance-free, its gentle enough for color-treated hair, keratin-treated hair and Brazilian blowouts.</Typography>
                        <Typography variant="body1" className={classes.info}>No parabens, no formaldehyde, no silicones, no petroleum-based ingredients.</Typography>
                        <Typography variant="body1" className={classes.info}>A few answers to brief questions narrows down over 30 natural extracts, hydrolyzed proteins and plant-based targeted active ingredients to create a formula designed precisely for your hair.</Typography>
                        <Typography variant="body1" className={classes.info}>Redefine your hair care routine today.  Create your own Mija personalized, all natural shampoo.</Typography>
                    </div>
                </div>
            </div>
            <Ingredients isMobile={isMobile} />
            <Contact/>
        </div>
    );
};
