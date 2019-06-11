import React from 'react';
import logo from '../../resources/mijo_cropped.jpg';
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