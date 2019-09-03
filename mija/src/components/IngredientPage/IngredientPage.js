import React, { useState } from "react";
import "./IngredientPage.css";
import wheat from '../../resources/wheat.jpg';
import apple from '../../resources/apple.jpg';
import daisy from '../../resources/daisy.jpg';
import stepfarm from '../../resources/stepfarm.jpg';

import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import {extracts, proteins, activeing, globalconsc} from './Modals';

const useStyles = makeStyles(theme => ({
    headerFrame: {
        color: '#292A5F',
    },
    ingpageHeader: {
        fontWeight: 'lighter',
        margin: theme.spacing(2, 0),
    },
    ingpageBaseInfo: {
        marginLeft: '15%',
        marginRight: '15%',
        marginBottom: theme.spacing(2),
        lineHeight: '150%',
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25vw',
        transition: '.3s',
        backgroundColor: '#292A5F',
        '&:hover':{
            backgroundColor: '#5454bd',
            transition: '.3s',
        },
        cursor: 'pointer',
        [theme.breakpoints.down('sm')]: {
            height: '50vw',
        },
    },
    image: {
        height: '25vw',
        [theme.breakpoints.down('sm')]: {
            height: '50vw',
        },
    },
    boxImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    boxHeader: {
        fontWeight: 'lighter',
        color: 'white',
        marginBottom: theme.spacing(2),
    },
    boxText: {
        fontWeight: 'lighter',
        lineHeight: '200%',
        color: 'white',
    },    
}));

const modals = [extracts, proteins, activeing, globalconsc];

export default function IngredientPage() {
    const [dialogOpen, setOpen] = useState(false);
    const [modalIndex, setIndex] = useState(1);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    function handleClickOpen() {
        setOpen(true);
    }
    function handleClickClose() {
        setOpen(false);
    }
    function clickExtracts(){
        setIndex(0);
        handleClickOpen();
    }
    function clickProteins(){
        setIndex(1);
        handleClickOpen();
    }
    function clickActive(){
        setIndex(2);
        handleClickOpen();
    }
    function clickGlobal(){
        setIndex(3);
        handleClickOpen();
    }

    return(
        <div>
            <div className={classes.headerFrame}>
                <Typography variant="h3" className={classes.ingpageHeader}>NATURAL INGREDIENTS</Typography>
                <Typography variant="h5" className={classes.ingpageHeader}>sustainable, renewable base formula</Typography>
                <Typography variant="body1" className={classes.ingpageBaseInfo}>Purified Water, Aloe barbadensis (Aloe Vera) Leaf Juice, Cocoglucoside, Sodium Cocoyl Apple Amino Acids, Sodium CocoylIsethionate, Sodium Cocoyl Hydrolyzed Soy Protein, Propanediol, Panthenol, Glycerin, Simmondsia chinensis (Jojoba) Esters, Xanthan Gum, Sclerotium Gum, Cetyl Alcohol, Phenoxyethanol, Caprylyl Glycol, Citric Acid, Trisodium Ethylenediamine Disuccinate, Sorbic Acid, Lactic Acid</Typography>
            </div>
            <Dialog open={dialogOpen} onClose={handleClickClose} maxWidth='md' fullWidth={true}>
                {modals[modalIndex]}
            </Dialog>
            <Grid container>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.image}>
                        <img src={daisy} alt="daisy" className={classes.boxImg} />
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper} onClick={clickExtracts} square>
                        <Typography variant={isMobile ? "h6" : "h5"} className={classes.boxHeader}>NATURAL EXTRACTS</Typography>
                        <Typography variant={isMobile ? "body2" : "body1"} className={classes.boxText}>Extracts from nature that are kinder to your hair.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.image}>
                        <img src={wheat} alt="wheat" className={classes.boxImg} />
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper} onClick={clickProteins} square>
                        <Typography variant={isMobile ? "h6" : "h5"} className={classes.boxHeader}>HYDROLYZED PROTEINS</Typography>
                        <Typography variant={isMobile ? "body2" : "body1"} className={classes.boxText}>Nourishing your hair with essential amino acids.</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper} onClick={clickActive} square>
                        <Typography variant={isMobile ? "h6" : "h5"} className={classes.boxHeader}>TARGETED ACTIVE INGREDIENTS</Typography>
                        <Typography variant={isMobile ? "body2" : "body1"} className={classes.boxText}>Nature’s best with a boost!</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.image}>
                        <img src={stepfarm} alt={"stepfarm"} className={classes.boxImg} />
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper} onClick={clickGlobal} square>
                        <Typography variant={isMobile ? "h6" : "h5"} className={classes.boxHeader}>GLOBALLY CONCIOUS</Typography>
                        <Typography variant={isMobile ? "body2" : "body1"} className={classes.boxText}>ECOCERT, organic, biodegradable</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.image}>
                        <img src={apple} alt={"apple"} className={classes.boxImg} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
