import React from 'react';
import styled from 'styled-components';
import Course from './Course';

const Courses = props =>(
    <CoursesList>
        {props.courses.map((course,key) => <Course key={key} course={course} />)}
    </CoursesList>
)

const CoursesList = styled.div`
    display:flex; 
    flex-wrap:wrap;
    align-items:center;
`

export default Courses;

