import React from "react";
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';

import CloseIcon from '@material-ui/icons/Close';

import flowers from "../../resources/flowers.jpg";
import tree from "../../resources/tree.jpg";
import cloverflowers from "../../resources/cloverflowers.jpg";
import waves from "../../resources/waves.jpg";

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
}))(MuiDialogContent);

const data = [
    {
        image: flowers,
        title: 'Extracts',
        header: 'Plant-based extracts',
        info: [
            "Chamomile extract - The chamomile flower is a natural soother.  Great for dry skin, chamomile extract will maintain a healthy scalp and enhance natural highlights.",
            "Cucumber extract - Brimming with minerals and potassium, cucumber extract is soothing to skin and scalp  and contains silica which can strengthen hair.",
            "Date palm extract - Rich in hair smoothing and skin softening properties, this extract helps hair appear thicker while improving manageability.",
            "Flax seed extract - Rich in Omega-3 fatty acids, this moisturizing extract can help prevent breakage, control flyaways and can add shine.",
            "Gingko biloba extract - A bundle of 49 different antioxidants, this extract is used to prevent environmental damage, smooth hair and helps decrease flyaways.",
            "Green Tea Extract - Powerful anti-oxidants make this extract perfect for scalp health. The naturally occurring caffeine may stimulate circulation in the scalp to encourage hair growth.",
            "Guava - Loaded with both vitamins C and A, guava extract can benefit those with oily hair because of its astringent qualities.   Naturally rich in omega fatty acids, it also offers conditioning benefits.",
            "Sake - Fermented from rice, sake is rich in vitamins, minerals and amino acids.  This extract moisturizes and nourishes hair.",
            "Soy - Enhances natural highlights of blond to light brown hair.  It also minimizes tangles while adding shine and volume to your hair.",
        ],
    },
    {
        image: tree,
        title: 'Hydrolyzed Proteins',
        header: 'Plant-based proteins',
        info: [
            "Baobab protein - One of the strongest natural hair repair proteins, baobab protein is extracted from the seed of the upside-down tree of Africa.  This powerful mix of hair-loving amino acids enhances damage recovery, conditions and nourishes your hair.",
            "Jojoba protein - Highly effective in repairing and conditioning damaged hair, jojoba also brings out the shine and luster of your hair.",
            "Kale protein blend - The combination of Kale, Carrot and Lemon proteins is jam-packed with vitamins and antioxidants for added softness, shine and loads of volume.",
            "Milk Protein - The highly nutrient rich protein is a fantastic breakage-prevention agent.  It improves elasticity and strength to make your hair easier to comb.",
            "Oat Protein - Creates a silky smooth feeling on hair and skin.  Benefits dry and damaged hair and may reduce the appearance of frizz and flyaways.",
            "Phytokeratin Protein- A combination of hydrolyzed proteins from wheat, corn and soybeans this complex mimics human hair amino acids.  Enhances moisture and conditioning to increase strength and elasticity.",
            "Quinoa Protein - Qunioa works both to improve color uptake and retention while at the same time encouraging damage repair with conditioning.",
            "Rice Protein - Enhances natural highlights of blond to light brown hair while adding shine and volume. Also helps decrease tangles.",
            "Silk Protein - Creates a protective silk barrier adds luster, body and manageability.",
        ],
    },
    {
        image: cloverflowers,
        title: 'Active Ingredients',
        header: 'Nature’s best with a boost',
        info: [
            "Growth Boost (Follicle Stimulating Peptide) - Derived from amino acids and red clove extract, this compound encourages hair growth.",
            "Strength Boost (Kera Straight & Curl) - A blend of hydrolyzed keratin and Trametes versicolor extract (a type of mushroom). It repairs and strengthens your hair and also protects it during styling.",
            "Volume Boost (Pisum Stivum Peptide) - Harnessing the power of pea protein, this boost is volumizing, conditioning and promotes scalp and hair follicle health.",
            "Repair Boost (Procutigen Bond) -  Extracted from one of the world’s healthiest powerfoods, chia seeds, this compound repairs broken bonds that occur during chemical stress.",
            "Heat Protect Boost (Procutigen Hold) - Made from bamboo protein, it supports hair to hold styles longer while protecting hair from style damage.",
            "Curl Boost (Rice Curl Complex) - Made from tomato and rice extracts, keratin amino acids and enzymes, this complex is designed to protect your hair against the environment while making both natural curls and styled curls last longer.",
            "Split End Boost (Split End Complex) - Made from rice protein and rice extract, this complex works to repair existing split ends while preventing new ones.",
            "Protection Boost (Vegan Kerazyme) - Made from bamboo and mushroom extracts plus corn, wheat & soy hydrolyzed proteins, this complex protects against styling and UV damage.",
        ],
    },
    {
        image: waves,
        title: 'Globally Conscious',
        header: 'Clean hair, clean world',
        info: [
            "We are committed to:",
            "Biodegradable, ECOCERT and organic ingredients.",
            "Our products are:",
            "petroleum-free",
            "sulfate-free",
            "formaldehyde-free",
            "fragrance-free",
            "paraben-free",
            "cocamidopropyl betaine-free",
            "silicone-free",
            "phthalate-free",
            "filler-free (no added salt)",
            "Vegan (exception of milk protein)",
            "Family and friends tested only",
            "Minimal use of plastic",
            "Glue-free labels",
            "Globally-approved preservatives",
        ],
    },
];

const useStyles = makeStyles(theme => ({
    modalImg: {
        height: 200,
        width: 200,
        margin: 'auto',
        marginTop: 20,
    },
    modalTitle: {
        color: '#292A5F',
        fontWeight: 'lighter',
        marginTop: 30,
        marginBottom: 20,
    },
    modalHeader: {
        color: '#292A5F',
        fontWeight: 'lighter',
        marginBottom: 10,
    },
    modalInfo: {
        fontWeight: 'lighter',
        lineHeight: '200%',
    },
}));

export default function ModalBody(props) {
    const { handleClose, index } = props;
    const classes = useStyles();

    return (
        <>
            <DialogTitle id="customized-dialog-title" onClose={handleClose} />
            <DialogContent>
                <Avatar src={data[index].image} className={classes.modalImg} />
                <Typography align="center" variant="h2" className={classes.modalTitle}>{data[index].title}</Typography>
                <Typography align="center" variant="h5" className={classes.modalHeader}>{data[index].header}</Typography>
                {data[index].info.map((text, i) => (
                    <Typography key={i} align="center" className={classes.modalInfo}>{text}</Typography>
                ))}
            </DialogContent>
        </>
    );
}

ModalBody.propTypes = {
    handleClose: PropTypes.func.isRequired,
    index: PropTypes.oneOf([0, 1, 2, 3]).isRequired,
};
