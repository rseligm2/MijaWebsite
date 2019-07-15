import React, { useState } from "react";
import "./IngredientPage.css";
import wheat from '../../resources/wheat.jpg';
import apple from '../../resources/apple.jpg';
import daisy from '../../resources/daisy.jpg';
import stepfarm from '../../resources/stepfarm.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Dialog from '@material-ui/core/Dialog';
import {extracts, proteins, activeing, globalconsc} from './Modals';

const useStyles = makeStyles(theme => ({
    root: {
        flexWrap: 'wrap',
        width: '100%',
        flexGrow: 1,
        position: 'relative',
    },
    paper: {
        width: '100%',
        height: '25vw',
        padding: theme.spacing(0),
        verticalAlign: 'center',
        position: 'relative',
        transition: '.3s',
        backgroundColor: '#292A5F',
        '&:hover':{
            backgroundColor: '#5454bd',
            transition: '.3s',
        },
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: '25vw',
        padding: theme.spacing(0),
        verticalAlign: 'center',
        position: 'relative',
    },
}));

const modals = [extracts, proteins, activeing, globalconsc];

export default function IngredientPage() {
    const [dialogOpen, setOpen] = useState(false);
    const [modalIndex, setIndex] = useState(1);
    const classes = useStyles();
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
        <div className="main_ing_frame">
            <div className="header_frame">
                <h1 className="ingpage_header">NATURAL INGREDIENTS</h1>
                <p className="ingpage_subheader">sustainable, renewable base formula</p>
                <p className="ingpage_base_info">Purified Water, Aloe barbadensis (Aloe Vera) Leaf Juice, Cocoglucoside, Sodium Cocoyl Apple Amino Acids, Sodium CocoylIsethionate, Sodium Cocoyl Hydrolyzed Soy Protein, Propanediol, Panthenol, Glycerin, Simmondsia chinensis (Jojoba) Esters, Xanthan Gum, Sclerotium Gum, Cetyl Alcohol, Phenoxyethanol, Caprylyl Glycol, Citric Acid, Trisodium Ethylenediamine Disuccinate, Sorbic Acid, Lactic Acid</p>
            </div>
            <Dialog open={dialogOpen} onClose={handleClickClose} maxWidth='md' fullWidth={true}>
                {modals[modalIndex]}
            </Dialog>
            <Grid container className={classes.root} spacinng={0}>
                <Grid container item xs={12} className={classes.root} spacing={0}>
                    <Grid item xs={3}>
                        <Paper className={classes.image}>
                            <img src={daisy} alt="daisy" className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} onClick={clickExtracts}>
                            <h1 className="box_header">EXTRACTS</h1>
                            <p className="box_text">from nature</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.image}>
                            <img src={wheat} alt="wheat" className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} onClick={clickProteins}>
                            <h1 className="box_header">HYDROLYZED PROTEINS</h1>
                            <p className="box_text">enhancing your hair with amino acids</p>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.root}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} onClick={clickActive}>
                            <h1 className="box_header">TARGETED ACTIVE INGREDIENTS</h1>
                            <p className="box_text">nature with a boost</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.image}>
                            <img src={stepfarm} alt={"stepfarm"} className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper} onClick={clickGlobal}>
                            <h1 className="box_header">GLOBALLY CONCIOUS</h1>
                            <p className="box_text">ECOCERT, organic, biodegradable</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.image}>
                            <img src={apple} alt={"apple"} className="box_img"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}