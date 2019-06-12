import React, {Component} from "react";
import Paper from '@material-ui/core/Paper';
import "./Ingredients.css";
import tree from "../../resources/tree.jpg";
import corn from "../../resources/corn.jpg";
import wheat from "../../resources/wheat.jpg";

const images = [tree, corn, wheat];

const treeinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Tree</h1>
        <p className="info_body">This is a tree.  It is ground up into tiny tree particles and then put inside your shampoo and then it will end up in your hair.</p>
    </div>
);

const corninfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Corn</h1>
        <p className="info_body">This is a corn.  It is ground up into tiny corn particles and then put inside your shampoo and then it will end up in your hair.</p>
    </div>
);

const wheatinfo = (
    <div className="inner_info_div">
        <h1 className="info_header">Wheat</h1>
        <p className="info_body">This is a wheat.  It is ground up into tiny wheat particles and then put inside your shampoo and then it will end up in your hair.</p>
    </div>
);

const Arrow = ({ clickFunction, glyph, direction }) => (
    <div
        className={ `slide-arrow ${direction}` }
        onClick={ clickFunction }>
        { glyph }
    </div>
);

const info = [treeinfo, corninfo, wheatinfo];

export default class Ingredients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        };

        this.nextIndex = this.nextIndex.bind(this);
        this.prevIndex = this.prevIndex.bind(this);
    }

    nextIndex(){
        const currindex = this.state.index;
        const newindex = currindex + 1 >= images.length ? 0 : currindex + 1;
        this.setState({index: newindex});
    }

    prevIndex(){
        const currindex = this.state.index;
        const newindex = currindex - 1 < 0 ? images.length - 1 : currindex - 1;
        this.setState({index: newindex});
    }

    render() {
        return(
            <div className="main_ing_div">
                <div className="bottom_ing_frame">
                    {/*<div className="main_header">*/}
                        {/*<h1 className="ing_title">Ingredients</h1>*/}
                    {/*</div>*/}
                    <div className="car_frame">
                        <Arrow
                            clickFunction={ this.prevIndex}
                            glyph="&#9664;"
                            direction="left"/>
                        <Paper className="ing_img_frame">
                            <img src={images[this.state.index]} alt="image" className="ing_image"/>
                        </Paper>
                        <Arrow
                            clickFunction={ this.nextIndex}
                            glyph="&#9654;"
                            direction="right"/>
                    </div>
                    <div className="info_frame">
                        {info[this.state.index]}
                    </div>
                </div>
            </div>
        );
    }
}

