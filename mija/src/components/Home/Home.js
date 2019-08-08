import React, { Component } from 'react';
import aloebeaker from '../../resources/aloe_in_beaker.jpg';
import './Home.css';
import Button from '@material-ui/core/Button';
import Ingredients from "../Ingredients/Ingredients";
import Contact from "../Contact/Contact";


export default class Home extends Component {

    render() {
        return(
            <div className="main_div">
                <div className="image_div">
                    <div className="text_div">
                        <div className="inner_text_div">
                            <h2 id="header">NATURAL, PERSONALIZED HAIR CARE</h2>
                            <p id="intro_text">
                                Nourish, replenish and rejuvenate
                            </p>
                            <p className="info">It starts with our carefully formulated shampoo base sourced from 100% plant-based, renewable and biodegradable ingredients.  Sulfate-free and fragrance-free, its gentle enough for color-treated hair, keratin-treated hair and Brazilian blowouts.</p>
                            <p className="info">No parabens, no formaldehyde, no silicones, no petroleum-based ingredients.</p>
                            <p className="info">A few answers to brief questions narrows down over 30 natural extracts, hydrolyzed proteins and plant-based targeted active ingredients to create a formula designed precisely for your hair.</p>
                            <p className="info">Redefine your hair care routine today.  Create your own Mija personalized, all natural shampoo.</p>
                            <br/>
                            <br/>
                            {/*<Button variant="outlined" size="small">*/}
                                {/*<p className="button_label">Customize Now!</p>*/}
                            {/*</Button>*/}
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