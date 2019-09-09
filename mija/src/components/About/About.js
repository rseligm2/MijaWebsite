import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import coconut from '../../resources/coconut.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        margin: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: 0,
        },
    },
    textFrame: {
        width: '50%',
        textAlign: 'left',
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    abHeader: {
        color: '#3667C2',
        fontWeight: 'lighter',
    },
    abSubHeader: {
        color: '#292A5F',
        fontWeight: 'lighter',
    },
    abInfo: {
        color: '#292A5F',
    },
    rightFrame: {
        width: '50%',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: 'auto',
        },
    },
    abImgFrame: {
        width: '70%',
        height: '90%',
        margin: 'auto',
        backgroundColor: '#292A5F',
        bottom: '0',
        position: 'absolute',
        left: 32,
        [theme.breakpoints.down('sm')]: {
            position: 'static',
        },
    },
    aboutImg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: -32,
        top: -32,
        objectFit: 'cover',
        [theme.breakpoints.down('sm')]: {
            position: 'static',
        },
    },
}));

export default function About() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <div className={classes.textFrame}>
                <Typography variant="h3" className={classes.abHeader} gutterBottom>About Us</Typography>
                <Typography variant="h6" className={classes.abSubHeader} gutterBottom>Healthier hair, healthier environment.</Typography>
                <Typography className={classes.abInfo} gutterBottom>It started in 2015 when I was very dissatisfied with my hair. I was spending a lot of money on salon hair color and purchasing expensive shampoos and conditioners and yet my hair kept getting drier, frizzier and more sparse.  I was using fragrance free facial cleansers and lotions at the time because it was better for my sensitive skin.  I wanted the same for my hair.</Typography>
                <Typography className={classes.abInfo} gutterBottom>I couldn't find fragrance free hair care that actually made my hair look and feel better. So I used my years of education in chemistry and lab sciences to create my own. I used the Whole Foods Premium Product ingredients guidelines as my starting point.</Typography>
                <Typography className={classes.abInfo} gutterBottom>As a scuba diver, I’ve seen what plastic and chemicals can do to our oceans.  So creating a product that is biodegradable and limits the use of plastic is also very important to me.  I look for nature-based ingredients that are not only sustainable and biodegradable but also gentle and effective.  Our bottles are 100% aluminum (recyclable) and the labels can be easily peeled off because no glues are used.  (We encourage reuse of the pumps.)</Typography>
                <Typography className={classes.abInfo} gutterBottom>Today, my hair feels and looks so much better. Yours will too.</Typography>
                <Typography className={classes.abInfo} gutterBottom>-Debi</Typography>
                <Link href="mailto:info@mijaclean.com">
                    <Typography className={classes.abInfo}>
                        info@mijaclean.com
                    </Typography>
                </Link>
            </div>
            <div className={classes.rightFrame}>
                <div className={classes.abImgFrame}>
                    <img src={coconut} alt="coconut" className={classes.aboutImg} />
                </div>
            </div>
        </div>
    );
}
