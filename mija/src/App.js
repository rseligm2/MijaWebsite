import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main">
                <TopSection/>
                <Home/>
                <BottomSection/>
            </div>
        );
    }
}

export default App;
