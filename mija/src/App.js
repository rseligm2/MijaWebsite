import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home/Home";
import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import IngredientPage from "./components/IngredientPage/IngredientPage";
import Customize from "./components/Customize/Customize";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ReactGA from 'react-ga';

class App extends Component {
    render() {
        ReactGA.initialize('UA-152631692-1');
        return (
            <div className="main">
                <Route component={TopSection}/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Ingredients" component={IngredientPage}/>
                    <Route path="/Customize" component={Customize}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Blog" component={Blog}/>
                </Switch>
                <Route component={BottomSection}/>
            </div>
        );
    }
}

export default App;
