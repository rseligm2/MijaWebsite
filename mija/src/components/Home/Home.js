import React, { Component } from 'react';
import aloebeaker from '../../resources/aloe_in_beaker.jpg';
import './Home.css';
import Button from '@material-ui/core/Button';
import Ingredients from "../Ingredients/Ingredients";
import Contact from "../Contact/Contact";


export default class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div className="main_div">
                <div className="image_div">
                    <div className="text_div">
                        <div className="inner_text_div">
                            <h2 id="header">NATURAL, CUSTOM SHAMPOO</h2>
                            <p id="intro_text">
                                Starts with our handcrafted shampoo base
                            </p>
                            <p className="info">Carefully formulated to comply with the Whole Foods Premium Body Care Standards.  That means not only is it sulfate-free, its sourced from 100% plant-based, renewable ingredients.  Its free of toxins such as parabens, formaldehyde and petroleum products.  To keep the formula as gentle and as biogradable as possible, its completely fragrance-free and silicone-free.  We also only use extremely mild globally-approved preservatives.</p>
                            <p className="info">Choose from all natural extracts, hydrolyzed proteins and specialty additives to formulate a shampoo specifically for your hair.  Or keep it simple and don't add anything.  Its completely up to YOU.</p>
                            <br/>
                            <br/>
                            <Button variant="outlined" size="small">
                                <p className="button_label">Customize Now!</p>
                            </Button>
                        </div>
                    </div>
                    <img src={aloebeaker} alt="aloe" className="image"/>
                </div>
                <Ingredients/>
                <Contact/>
            </div>
        );
    }
}