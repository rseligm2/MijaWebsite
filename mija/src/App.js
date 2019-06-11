import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import TopSection from "./components/TopSection/TopSection";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main">
                <TopSection/>
                <Home/>
            </div>
        );
    }
}

export default App;
