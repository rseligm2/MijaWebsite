import React from "react";
import "./BottomSection.css";
import facebook from '../../resources/facebook_icon.png';
import instagram from '../../resources/instagram_icon.png';
import twitter from '../../resources/twitter_icon.png';

export default function BottomSection() {
    return (
        <div className="bottom_main">
            <div className="social_frame">
                <div className="inner_social">
                    <a href="https://www.facebook.com/mijaclean/"><img src={facebook} alt="facebook" className="icon"/></a>
                    <a href="https://www.instagram.com/mijacleanllc/"><img src={instagram} alt="instagram" className="icon"/></a>
                    <a href="https://twitter.com/LlcMija"><img src={twitter} alt="twitter" className="icon"/></a>
                </div>
            </div>
            <div className="footer">
                <p className="footer_text">©2019 by Mija.</p>
            </div>
        </div>
    );
}