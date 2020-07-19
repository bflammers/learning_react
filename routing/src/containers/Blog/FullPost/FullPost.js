import React, { useState, useEffect } from 'react';
import axios from '../../../axios';

import './FullPost.css';

const FullPost = (props) => {
    
    const [LoadedPost, setLoadedPost] = useState(null)

    useEffect(() => {
        if ( props.match.params.id ) {
            axios.get( '/posts/' + props.match.params.id )
                .then( response => {
                    setLoadedPost( response.data );
                } );
        }
    }, [props.match.params.id])

    const deletePostHandler = () => {
        axios.delete('/posts/' + props.id)
            .then(response => {
                console.log(response);
            });
    }

    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if ( props.match.params.id ) {
        post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
    }

    if ( LoadedPost ) {
        post = (
            <div className="FullPost">
                <h1>{LoadedPost.title}</h1>
                <p>{LoadedPost.body}</p>
                <div className="Edit">
                    <button onClick={deletePostHandler} className="Delete">Delete</button>
                </div>
            </div>

        );
    }
    return post
}

export default FullPost;