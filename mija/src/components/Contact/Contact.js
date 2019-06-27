import React, {Component} from "react";
import './Contact.css';
import beakers from "../../resources/beakers.jpg";
import ContactInput from "./ContactInput";

export default class Contact extends Component {

    render() {
        return (
            <div className="contact_frame">
                <div className="inner_main_frame">
                    <div className="cont_img_frame">
                        <img src={beakers} alt = "beakers" className="cont_img"/>
                    </div>
                    <div className="input_frame">
                        <div className="inner_input_frame">
                            <h1 className="cont_header">CONTACT US</h1>
                            <ContactInput/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
