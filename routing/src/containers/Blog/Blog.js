import React, { useState} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost'
import classes from './Blog.module.css';

const Blog = (props) => {

    const [Auth, setAuth] = useState(true)

    return (
        <div className={classes.Blog}>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink 
                                activeClassName={classes.active} 
                                exact 
                                to="/posts">Posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                activeClassName={classes.active}
                                to="/new-post">New Post
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
            <Switch>
                {Auth ? <Route path="/new-post" exact component={NewPost}/> : null }
                <Route path="/posts" component={Posts}/>
                <Route render={() => <h1>Not found</h1>}/>
                {/* <Redirect from="/" to="/posts"/> */}
            </Switch>
        </div>
    );
}

export default Blog;