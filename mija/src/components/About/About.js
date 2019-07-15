import React from 'react';
import "./About.css";
import coconut from '../../resources/coconut.jpg';

export default function About(){
    return(
        <div className="main_ab_frame">
            <div className="left_frame">
                <div className="text_frame">
                    <h2 className="ab_header">About Us</h2>
                    <p className="ab_sub_header">A nature-based micro-shampooery</p>
                    <p className="ab_info">It started in 2015.  I was getting very dissatisfied with my hair.  I was spending a lot of money on salon hair color and purchasing expensive shampoos from the salon and yet my hair kept getting drier, frizzier and more sparse.  I was using fragrance free facial cleansers because it was better for my skin and wanted to do the same with my hair care products.</p>
                    <p className="ab_info">I couldn't find a fragrance free shampoo that actually made my hair look and feel better.  So I used my years of education in chemistry and lab sciences to create my own.  I used the Whole Foods Premium Product ingredients guidelines as my starting point.  I looked for nature-based ingredients that were not only sustainable and biodegradable but also gentle and effective.</p>
                    <p className="ab_info">My hair feels and looks so much better.  Yours will too.  Give it a try and let me know what you think!</p>
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