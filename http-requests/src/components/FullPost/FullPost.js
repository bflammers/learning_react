import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './FullPost.css';

const FullPost = (props) => {

    const [post, setPost] = useState(null)

    useEffect(() => {
        if (props.id) {
            axios.get('/posts/' + props.id)
                .then(response => setPost(response.data))
        }
    }, [props.id])

    const deletePostHandler = () => {
        if (props.id) {
            axios.delete('/posts/' + props.id)
                .then(response => console.log(response))
        }
    }

    if (post) {
        return (
            <div className="FullPost">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <div className="Edit">
                    <button 
                        onClick={deletePostHandler}
                        className="Delete">Delete</button>
                </div>
            </div>
        )
    } 

    return <p style={{textAlign: 'center'}}>Please select a post</p>
}

export default FullPost;