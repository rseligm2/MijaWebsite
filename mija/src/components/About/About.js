import React from 'react';
import "./About.css";
import coconut from '../../resources/coconut.jpg';

export default function About(){
    return(
        <div className="main_ab_frame">
            <div className="left_frame">
                <div className="text_frame">
                    <h2 className="ab_header">About Us</h2>
                    <p className="ab_sub_header">Healthier hair, healthier environment.</p>
                    <p className="ab_info">It started in 2015 when I was very dissatisfied with my hair. I was spending a lot of money on salon hair color and purchasing expensive shampoos and conditioners and yet my hair kept getting drier, frizzier and more sparse.  I was using fragrance free facial cleansers and lotions at the time because it was better for my sensitive skin.  I wanted the same for my hair.</p>
                    <p className="ab_info">I couldn't find fragrance free hair care that actually made my hair look and feel better. So I used my years of education in chemistry and lab sciences to create my own. I used the Whole Foods Premium Product ingredients guidelines as my starting point.</p>
                    <p className="ab_info">As a scuba diver, I’ve seen what plastic and chemicals can do to our oceans.  So creating a product that is biodegradable and limits the use of plastic is also very important to me.  I look for nature-based ingredients that are not only sustainable and biodegradable but also gentle and effective.  Our bottles are 100% aluminum (recyclable) and the labels can be easily peeled off because no glues are used.  (We encourage reuse of the pumps.)</p>
                    <p className="ab_info">Today, my hair feels and looks so much better. Yours will too.</p>
                    <p className="ab_info">-Debi</p>
                    <a href="mailto:info@mijaclean.com"><p className="ab_info">info@mijaclean.com</p></a>
                </div>
            </div>
            <div className="right_frame">
                <div className="ab_img_frame">
                    <img src={coconut} alt="coconut" className="about_img"/>
                </div>
            </div>
        </div>
    );
}