import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([])
    const [selectedPostID, setSelectedPostID] = useState(null)

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                const newPosts = response.data.map(post => {
                    return {...post, author: 'Bart'}
                })
                setPosts(newPosts)
            })
            .catch(error => console.log(error))
    }, [])

    const postClickHandler = (id) => {
        setSelectedPostID(id)
    }

    const PostsArray = posts.slice(0, 4).map((post) => {
        return (
            <Post 
                key={post.id}
                id={post.id}
                post={post} 
                clicked={postClickHandler}/>
        )
    })



    return (
        <div>
            <section className="Posts">
                {PostsArray}
            </section>
            <section>
                <FullPost id={selectedPostID}/>
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    )
}

export default Blog;