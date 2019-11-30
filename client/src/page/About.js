import React from "react";
import styled from "styled-components";

const About = props => (
  <AboutStyle>
    <div className="title-container">
      <h1> About Page</h1>
    </div>
    <div>
        
    </div>
  </AboutStyle>
);

const AboutStyle = styled.div`
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

export default About;
