import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            __html: "",
            posts: [],
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://www.googleapis.com/blogger/v3/blogs/942987024806115128/posts?key=AIzaSyBCVDsM2ykqrakO7_mnA3mzzBJCAJlrV5w"
            )
            .then(res => {
                this.setState({posts: res.data.items});
                console.log(this.state.posts);
            })
            .catch(error => console.log(error));
    }

    render() {
        let theposts = this.state.posts.map((post) => {
            return(
                <div className="post_frame">
                    <Post markup={post.content}/>
                    <p className="date">{post.published.substring(0,10)}</p>
                </div>
            )
        });
        return (
            <div className="blog">
                {/*<h1 className="sectionTitle">Articles</h1>*/}
                {theposts}
            </div>
        );
    }
}