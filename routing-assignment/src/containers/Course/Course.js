import React from 'react';
import { useLocation } from "react-router-dom"

const Course = (props) => {

    let query = new URLSearchParams(props.location.search)// useLocation().search)

    return (
        <div>
            <h1>{query.get('name')}</h1>
            <p>You selected the Course with ID: {props.match.params.id}</p>
        </div>
    );
}

export default Course;