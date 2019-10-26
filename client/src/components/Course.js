import React from 'react';
import styled from 'styled-components';

const Course = props =>(
    <CourseCard>
        <Cover image={props.course.cover}/>
        <div className="course-infos">
            <div>
                {props.course.title}
            </div>
            <div>
                {props.course.students}
            </div>
            <div>
                {props.course.price}
            </div>
            <div>
                {props.course.rating}
            </div>
            <div>
                {props.course.teacher}
            </div>
        </div>
    </CourseCard>
)

const CourseCard = styled.div`
    background-color:white;
    width:300px;
    margin:10px;
    min-height:200px;
    border:none;
    border-radius:5px;
    box-shadow:0px 0px 3px rgba(0,0,0,0.5);
    
    .course-infos{
        padding:1%;
    }
`

const Cover = styled.div`
    background:url(${props => props.image});
    height:250px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:100%;
    }
`


export default Course;