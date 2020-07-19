import React, { useState, useEffect }from 'react'
import axios from '../../../axios';

import classes from './Posts.module.css'
import Post from '../../../components/Post/Post'
import FullPost from '../../../containers/Blog/FullPost/FullPost'
import { Route } from 'react-router-dom'

const Posts = (props) => {

    const [Posts, setPosts] = useState([])
    const [Error, setError] = useState(false)

    const postSelectedHandler = (id) => {
        props.history.push(props.match.url + "/" + id)
    }

    useEffect(() => {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                setPosts(updatedPosts)
                // console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                setError(error)
            });
    }, [])

    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    
    if (!Error) {
        posts = Posts.map(post => {
            return (
                <Post
                    key={post.id}
                    title={post.title} 
                    author={post.author} 
                    clicked={()=> postSelectedHandler(post.id)}/>
            )
        });
    }

    return (
        <div>
            <section className={classes.Posts}>
                {posts}
            </section>
            <Route path={props.match.url + '/:id'} component={FullPost}/>
        </div>
    )
}

export default Posts
