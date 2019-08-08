import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import "./Ingredients.css";
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

const images = [tree, corn, wheat, soy, silk, milk, rice, kale, jojoba];

const treeinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Super conditioning</h1>
        <p className="info_body">Baobab is one of the strongest natural hair-repair proteins.  This powerful mix of hair-loving amino acids offers exceptional conditioning, and nourishment for your hair.</p>
    </div>
);

const corninfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Enhanced moisture</h1>
        <p className="info_body">Phytokeratin combines hydrolyzed proteins from wheat, corn, and soybeans that penetrate the hair shaft and helps your hair retain its natural moisture content.</p>
    </div>
);

const wheatinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Healthy life cycle</h1>
        <p className="info_body">Wheat, rich in cysteine, works to give your hair better body and control, maintaining your hair's healthy life cycle. It increases shine, protects your hair, and repairs damage.</p>
    </div>
);

const soyinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Smoother and fuller</h1>
        <p className="info_body">Soy is rich in cysteine, an amino acid used to strengthen hair.  It also enhances hair manageability, improves body and texture of hair and improves combing properties.</p>
    </div>
);

const silkinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Replenishing</h1>
        <p className="info_body">Silk restores your damaged hair and shields it from damaging elements. It can also add volume and shine while keeping your hair moisturized, soft and free of tangles.</p>
    </div>
);

const milkinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Strong and shiny</h1>
        <p className="info_body">Milk protein is rich in amino acids.  It strengthens your hair and improves elasticity, so you can easily comb your hair without breakage. Its great nourishment for your hair.</p>
    </div>
);

const riceinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Natural highlights</h1>
        <p className="info_body">Rice can increase your total hair volume by up to 32%. It will also enhance your natural highlights for blond to medium brown hair. Your hair will look shinier and healthier.</p>
    </div>
);

const kaleinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Healthy scalp and hair</h1>
        <p className="info_body">The combination of kale, carrot and lemon proteins is packed with vitamins and antioxidants for softness and shine.  It keeps your scalp healthy while adding volume.</p>
    </div>
);

const jojobainfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Relief for damaged hair</h1>
        <p className="info_body">Jojoba is highly effective in repair and conditioning of damaged hair. It adds shine and luster to your hair and is uniquely similar to natural hair oils.</p>
    </div>
);

const Arrow = ({ clickFunction, glyph, direction }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);

const info = [treeinfo, corninfo, wheatinfo, soyinfo, silkinfo, milkinfo, riceinfo, kaleinfo, jojobainfo];

export default class Ingredients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            fade: true,
        };

        this.nextIndex = this.nextIndex.bind(this);
        this.prevIndex = this.prevIndex.bind(this);
        this.handleFade = this.handleFade.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer(){
        this.timerID = setInterval(
            () => this.nextIndex(),
            8000
        );
    }

    nextIndex(){
        clearInterval(this.timerID);
        const currindex = this.state.index;
        const newindex = currindex + 1 >= images.length ? 0 : currindex + 1;
        this.handleFade();
        setTimeout(function() {
            this.setState({index: newindex});
        }.bind(this), 500);
        this.startTimer();
    }

    prevIndex(){
        clearInterval(this.timerID);
        const currindex = this.state.index;
        const newindex = currindex - 1 < 0 ? images.length - 1 : currindex - 1;
        this.handleFade();
        setTimeout(function() {
            this.setState({index: newindex});
        }.bind(this), 500);
        this.startTimer();
    }

    handleFade(){
        this.setState({fade: false});
        setTimeout(function() {
            this.setState({fade: true});
        }.bind(this), 500);
    }

    render() {
        return(
            <div className="main_ing_div">
                <div className="main_header"><h1 className="ing_title">biodegradeable, sustainable ingredients</h1></div>
                {/*<Arrow*/}
                    {/*clickFunction={ this.prevIndex}*/}
                    {/*glyph="&#9664;"*/}
                    {/*direction="left"/>*/}
                <div className="bottom_ing_frame">
                    {/*<div className="main_header">*/}
                        {/*<h1 className="ing_title">Ingredients</h1>*/}
                    {/*</div>*/}
                    <div className="car_frame">
                        <div className="ing_img_frame">
                            <Fade in={this.state.fade} timeout={{enter: 500, exit: 500}}>
                                <img src={images[this.state.index]} alt="" className="ing_image"/>
                            </Fade>
                        </div>
                    </div>
                    <Fade in={this.state.fade} timeout={{enter: 500, exit: 500}}>
                        <div className="info_frame">
                            {info[this.state.index]}
                        </div>
                    </Fade>
                </div>
                {/*<Arrow*/}
                    {/*clickFunction={ this.nextIndex}*/}
                    {/*glyph="&#9654;"*/}
                    {/*direction="right"/>*/}
            </div>
        );
    }
}

