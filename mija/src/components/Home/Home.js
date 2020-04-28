import React from 'react';

import { makeStyles } from '@material-ui/core/styles'; 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import aloebeaker from '../../resources/aloe_in_beaker.jpg';

import Ingredients from "../Ingredients/Ingredients";
import Contact from "../Contact/Contact";


const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
        width: '100%',
    },
    imageDiv: {
        position: 'relative',
        // width: '100%',
        display: 'flex',
        flexDirection:'column',
    },
    imageAloe: {
        width: '100%',
    },
    textDiv: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        right: 0,
        marginLeft: 'auto',
        backgroundColor: 'rgba(255, 255, 255, .5)',
        overflow: 'auto',
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
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
        marginTop: theme.spacing(2),
    },
    info: {
        margin: theme.spacing(2, 0),
        fontWeight: 'lighter',
        color: '#292A5F',
    },
}));

ReactGA.event({
    category: 'User',
    action: 'Created an Account'
});

export default function Home() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className={classes.root}>
            <div className={classes.imageDiv}>
                <div className={classes.textDiv}>
                    <div className={classes.innerTextDiv}>
                        <Typography variant={isMobile ? "h4" : "h3"} className={classes.header}>NATURAL, PERSONALIZED HAIR CARE</Typography>
                        <Typography variant="h5" className={classes.introText}>Nourish, replenish and rejuvenate</Typography>

                        <Typography variant="body1" className={classes.info}>It starts with our carefully formulated shampoo base sourced from 100% plant-based, renewable and biodegradable ingredients.  Sulfate-free and fragrance-free, its gentle enough for color-treated hair, keratin-treated hair and Brazilian blowouts.</Typography>
                        <Typography variant="body1" className={classes.info}>No parabens, no formaldehyde, no silicones, no petroleum-based ingredients.</Typography>
                        <Typography variant="body1" className={classes.info}>A few answers to brief questions narrows down over 30 natural extracts, hydrolyzed proteins and plant-based targeted active ingredients to create a formula designed precisely for your hair.</Typography>
                        <Typography variant="body1" className={classes.info}>Redefine your hair care route today. Create your own Mija (Women's) or Mijo (Men's) personalized, all natural shampoo. 8.5 oz.  <i></i></Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            component="a"
                            href="https://www.surveymonkey.com/r/MijaCleanOrder"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Order Now
                        </Button>
                    </div>
                </div>
                <img src={aloebeaker} alt="aloe" className={classes.imageAloe} />
            </div>
            <Ingredients isMobile={isMobile} />
            <Contact isMobile={isMobile} />
        </div>
    );
};
