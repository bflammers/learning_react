import React, { useState } from 'react';
import axios from 'axios';

import './NewPost.css';

const NewPost = (props) => {

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: 'Bart'
    })

    const postDataHandler = () => {
        const data = {
            title: post.title, 
            author: post.author, 
            body: post.content
        }
        axios.post('/posts', data)
            .then(response => console.log(response))
    }

    const postChangeHandler = (newVal, field) => {
        const newPost = {...post}
        newPost[field] = newVal
        setPost(newPost)
    }

    return (
        <div className="NewPost">
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => postChangeHandler(event.target.value, 'title')} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => postChangeHandler(event.target.value, 'content')} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => postChangeHandler(event.target.value, 'author')}>
                <option value="Max">Bart</option>
                <option value="Manu">Mette</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );
}

export default NewPost;