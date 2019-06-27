import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import IngredientPage from "./components/IngredientPage/IngredientPage";
import Customize from "./components/Customize/Customize";

class App extends Component {

    render() {
        return (
            <div className="main">
                <Route component={TopSection}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Ingredients" component={IngredientPage}/>
                    <Route path="/Customize" component={Customize}/>
                </Switch>
                <Route component={BottomSection}/>
            </div>
        );
    }
}

export default App;
