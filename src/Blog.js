import React, { Component } from 'react';
import axios from './axios';

import Post from './components/Post/Post';
import FullPost from './components/FullPost/FullPost';
import './style/Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Rahul'
                    }
                });
                this.setState({posts: updatedPosts});
            } )
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div className="container">
                <center><h1>Welcome to API based React App</h1></center>
                <center><h6>Data Fetched by JsonPlaceHolder API</h6></center>
                <hr></hr>
                <section className="Posts">
                    {posts}
                </section>
                <hr></hr>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
            </div>
        );
    }
}

export default Blog;