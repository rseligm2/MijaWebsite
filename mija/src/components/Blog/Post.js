import React, { Component } from 'react';
import './Post.css';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            __html: props.markup,
        };
    }
    render(){
        return(
            <div className="content" dangerouslySetInnerHTML={this.state}/>
            );
    }
}