import React, { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// import "./Ingredients.css";
import tree from "../../resources/tree.jpg";
import corn from "../../resources/corn.jpg";
import wheat from "../../resources/wheat.jpg";
import soy from "../../resources/soy.jpg";
import silk from "../../resources/silk.jpg";
import milk from "../../resources/milk.jpg";
import rice from "../../resources/rice.jpg";
import kale from "../../resources/kale.jpg";
import jojoba from "../../resources/jojoba.png";

import Fade from '@material-ui/core/Fade';

const ingredientsList = [
    {
        image: tree,
        title: 'Super conditioning',
        info: 'Baobab is one of the strongest natural hair-repair proteins.  This powerful mix of hair-loving amino acids offers exceptional conditioning, and nourishment for your hair.',
    },
    {
        image: corn,
        title: 'Enhanced moisture',
        info: 'Phytokeratin combines hydrolyzed proteins from wheat, corn, and soybeans that penetrate the hair shaft and helps your hair retain its natural moisture content.',
    },
    {
        image: wheat,
        title: 'Healthy life cycle',
        info: 'Wheat, rich in cysteine, works to give your hair better body and control, maintaining your hair\'s healthy life cycle. It increases shine, protects your hair, and repairs damage.',
    },
    {
        image: soy,
        title: 'Smoother and fuller',
        info: 'Soy is rich in cysteine, an amino acid used to strengthen hair.  It also enhances hair manageability, improves body and texture of hair and improves combing properties.',
    },
    {
        image: silk,
        title: 'Replenishing',
        info: 'Silk restores your damaged hair and shields it from damaging elements. It can also add volume and shine while keeping your hair moisturized, soft and free of tangles.',
    },
    {
        image: milk,
        title: 'Strong and shiny',
        info: 'Milk protein is rich in amino acids.  It strengthens your hair and improves elasticity, so you can easily comb your hair without breakage. Its great nourishment for your hair.',
    },
    {
        image: rice,
        title: 'Natural highlights',
        info: 'Rice can increase your total hair volume by up to 32%. It will also enhance your natural highlights for blond to medium brown hair. Your hair will look shinier and healthier.',
    },
    {
        image: kale,
        title: 'Healthy scalp and hair',
        info: 'The combination of kale, carrot and lemon proteins is packed with vitamins and antioxidants for softness and shine.  It keeps your scalp healthy while adding volume.',
    },
    {
        image: jojoba,
        title: 'Relief for damaged hair',
        info: 'Jojoba is highly effective in repair and conditioning of damaged hair. It adds shine and luster to your hair and is uniquely similar to natural hair oils.',
    },
];

// const Arrow = ({ clickFunction, glyph, direction }) => (
//     <div
//         className={ `slide-arrow ${direction}` }
//         onClick={ clickFunction }>
//         { glyph }
//     </div>
// );

const useStyles = makeStyles(theme => ({
    mainHeader: {
        padding: theme.spacing(8, 0),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CAD3E6',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 0),
        },
    },
    ingTitle: {
        fontWeight: 'lighter',
        color: '#292A5F',
    },
    bottomIngFrame: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(8, 12),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: theme.spacing(2, 2),
        },
    },
    carFrame: {
        width: '50%',
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(0),
        },
    },
    ingImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    infoFrame: {
        width: '50%',
        padding: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(0),
        },
    },
    infoHeader: {
        fontWeight: 'lighter',
        color: '#292A5F',
        marginBottom: theme.spacing(5),
    },
    infoBody: {
        fontWeight: 'lighter',
        color: '#292A5F',
    },
}));

export default function Ingredients(props) {
    const classes = useStyles();
    const { isMobile } = props;

    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const timerID = useRef(null);

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerID.current);
        /* eslint-disable-next-line */
    }, []);

    const startTimer = () => {
        timerID.current = setInterval(() => nextIndex(), 8000);
    };

    const nextIndex = () => {
        clearInterval(timerID.current);
        handleFade();
        setTimeout(function() {
            setIndex(index => (index+1) % ingredientsList.length);
        }, 500);
        startTimer();
    };

    // const prevIndex = () => {
    //     clearInterval(timerID.current);
    //     const newindex = index - 1 < 0 ? ingredientsList.length - 1 : index - 1;
    //     handleFade();
    //     setTimeout(function() {
    //         setIndex(newindex);
    //     }, 500);
    //     startTimer();
    // };

    const handleFade = () => {
        setFade(false);
        setTimeout(() => {
            setFade(true);
        }, 500);
    };

    return(
        <div>
            <div className={classes.mainHeader}>
                <Typography variant={isMobile ? "h5" : "h3"} className={classes.ingTitle}>biodegradeable, sustainable ingredients</Typography>
            </div>
            {/* <Arrow clickFunction={prevIndex} glyph="&#9664;" direction="left"/> */}
            <div className={classes.bottomIngFrame}>
                {/* <div className="main_header">
                    <h1 className="ing_title">Ingredients</h1>
                </div> */}
                <div className={classes.carFrame}>
                    <Fade in={fade} timeout={{enter: 500, exit: 500}}>
                        <img src={ingredientsList[index].image} alt={ingredientsList[index].title} className={classes.ingImage} />
                    </Fade>
                </div>
                <Fade in={fade} timeout={{enter: 500, exit: 500}}>
                    <div className={classes.infoFrame}>
                        <Typography variant={isMobile ? "h5" : "h3"} className={classes.infoHeader}>{ingredientsList[index].title}</Typography>
                        <Typography variant={isMobile ? "body1" : "h5"} className={classes.infoBody}>{ingredientsList[index].info}</Typography>
                    </div>
                </Fade>
            </div>
            {/* <Arrow clickFunction={nextIndex} glyph="&#9654;" direction="right"/> */}
        </div>
    );
};

Ingredients.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};
