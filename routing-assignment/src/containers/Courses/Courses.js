import React, { useState } from 'react';
import { Route, Link, useLocation } from 'react-router-dom'
import Course from '../Course/Course'

import './Courses.css';


const Courses = (props) => {

    const [Courses, setCourses] = useState([
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    )

    return (
        <div>
            <h1>Amazing Udemy Courses</h1>
            <section className="Courses">
                {
                    Courses.map( course => {
                        return (
                            <Link to={{
                                pathname: props.match.url + "/" + course.id, 
                                search: "?name=" + course.title
                            }}>
                                <article 
                                    className="Course" 
                                    key={course.id}>{course.title}</article>
                            </Link>
                        )
                    } )
                }
            </section>
            <Route 
                path={props.match.url + "/:id"}
                component={Course}/>
        </div>
    );
}

export default Courses;