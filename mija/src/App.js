import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import IngredientPage from "./components/IngredientPage/IngredientPage";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main">
                <Route component={TopSection}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Ingredients" component={IngredientPage}/>
                </Switch>
                <Route component={BottomSection}/>
            </div>
        );
    }
}

export default App;
