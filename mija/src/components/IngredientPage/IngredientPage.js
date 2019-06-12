import React from "react";
import "./IngredientPage.css";
import wheat from '../../resources/wheat.jpg';
import apple from '../../resources/apple.jpg';
import daisy from '../../resources/daisy.jpg';
import stepfarm from '../../resources/stepfarm.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
        backgroundColor: '#ededed',
    },
}));

export default function IngredientPage() {
    const classes = useStyles();
    return(
        <div className="main_ing_frame">
            <div className="header_frame">
                <h1 className="ingpage_header">NATURAL INGREDIENTS</h1>
                <p className="ingpage_subheader">sustainable, renewable</p>
            </div>
            <Grid container className={classes.root} spacinng={0}>
                <Grid container item xs={12} className={classes.root} spacing={0}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <img src={apple} alt="apple" className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <h1 className="box_header">EXTRACTS</h1>
                            <p className="box_text">from nature</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <img src={wheat} alt="wheat" className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <h1 className="box_header">HYDROLYZED PROTEINS</h1>
                            <p className="box_text">enhancing your hair with amino acids</p>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container item xs={12} className={classes.root}>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <h1 className="box_header">TARGETED ACTIVE INGREDIENTS</h1>
                            <p className="box_text">nature with a boost</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <img src={stepfarm} alt={"stepfarm"} className="box_img"/>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <h1 className="box_header">GLOBALLY CONCIOUS</h1>
                            <p className="box_text">ECOCERT, organic, biodegradable</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            <img src={daisy} alt={"daisy"} className="box_img"/>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}