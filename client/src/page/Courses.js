import React from 'react';
import Courses from '../components/Courses';
import styled from 'styled-components';

const CoursesPage = props =>(
    <CoursesPageStyle>
        <div className="title-container">
            <h1>All Courses</h1>
        </div>
        <div className="courses-container">
            <Courses courses={courses}/>
        </div>
    </CoursesPageStyle>
)

export default CoursesPage;

const CoursesPageStyle = styled.div`
    
    min-height:100vh;

    .title-container{
        background-color:#eee;
        height:120px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    h1{
        font-family:"Raleway",serif;
    }
`


const courses = [
    {title:"Javascript Online course",cover:require("../images/about-video.jpg"),students:43,price:"18 $",rating:4,teacher:"Adam"},
    {title:"Ruby: From zero to hero",cover:require("../images/about.png"),students:43,price:"18 $",rating:4,teacher:"Eve"},
    {title:"Ruby: From zero to hero",cover:require("../images/course01.jpg"),students:43,price:"18 $",rating:4,teacher:"Eve"},
    {title:"Ruby: From zero to hero",cover:require("../images/course02.jpg"),students:43,price:"18 $",rating:4,teacher:"Eve"},
    {title:"Ruby: From zero to hero",cover:require("../images/course02.jpg"),students:43,price:"18 $",rating:4,teacher:"Eve"},
    {title:"Ruby: From zero to hero",cover:require("../images/course02.jpg"),students:43,price:"18 $",rating:4,teacher:"Eve"},
]