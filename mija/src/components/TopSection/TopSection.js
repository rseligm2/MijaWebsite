import React from 'react';
import logo from '../../resources/cropped_Mija_Full_Logo.jpg';
import './TopSection.css';
import TopMenu from "../TopMenu/TopMenu";

function TopSection(){
    return(
    <div className="main">
        <img src = {logo} alt="logo" className="logo"/>
        <TopMenu />
    </div>
    );
};

export default TopSection;