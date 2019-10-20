import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import Header from '../components/Header';
import { mainColor } from '../utils/theme';
import Carret from '../svg/carret';

const Home = () => {
    return (
        <HomeStyle>
            <Box>
                <Header />
                <WrapperOne>
                    <Title>
                        Openmooc is a free online training course <Dot>.</Dot>
                    </Title>
                    <Link to="/lessons">
                        <CallToAction href="/courses">
                            <span>Browse courses </span><Carret />
                        </CallToAction>
                    </Link>
                </WrapperOne>
            </Box>
            <Box1>
                <h2>Love to learn? You've come to the right place</h2>
                <InnerWrapper>
                    <div>
                        <div>
                            <Circle>
                                <FontAwesomeIcon icon="fire" />
                            </Circle>
                            <p>
                                Join a supportive community of millions of coders
                        </p>
                        </div>
                        <div>
                            <Circle>
                                <FontAwesomeIcon icon="certificate" />
                            </Circle>
                            <p>
                                Build projects and earn free certifications.
                        </p>
                        </div>
                        <div>
                            <Circle>
                                <FontAwesomeIcon icon="briefcase" />
                            </Circle>
                            <p>
                                Get experience by coding for nonprofits.
                        </p>
                        </div>
                    </div>
                    <img src={require("../images/about.png")} />
                </InnerWrapper>
            </Box1>
        </HomeStyle>
    )
}

const CallToAction = styled.a`
    background-color:#0590B5;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    color:#D8E9DA;
    letter-spacing: 3px;
    font-weight:bold;
    border:none;
    width:250px;
    height:50px;
    border-radius: 20px;
    box-shadow: 0px 2px 3px rgba(0,0,0,0.5);
    /* color:white; */
    font-family: 'Raleway', sans-serif;
    &:hover{
        color:#D8E9DA;
        text-decoration:none;
        box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
        transition:0.5s;
    }

    span{
        font-size:18px;
        margin-right:10px;
    }
`


const HomeStyle = styled.div`
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
   color:white;
`

const InnerWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color:${mainColor};
    margin-top:50px;
    div{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-bottom:20px;
        div{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            p{
                width:40%;
            }
        }
    }

    img{
        width:400px;
    }
`
const Circle = styled.div`
  width:70px;
  height:70px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: ${mainColor};
  border-radius:50%;
  font-size:24px;
  color:white;
`


const WrapperOne = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`

const Title = styled.h1`
font-weight:300;
text-align:center;
font-family:"Roboto Slab";
`
const Dot = styled.span`
  font-size:100px;
`



const Box = styled.div`
   background-image: linear-gradient(to bottom right, #57995d, ${mainColor});
   height:100vh;
   display:flex;
   flex-direction:column;
   /* justify-content:center;
   align-items:center; */
`

const Box1 = styled.div`
   background-color:white;
   height:100vh;
   display:flex;
   flex-direction: column;
   padding-top:50px;
   text-align:center;
   h2{
       color:${mainColor};
       font-family:"Roboto Slab";
   }
   
`

const Description = styled.p`
   color: ${mainColor};
`

const Icon = styled.div`
  font-size:30px;
`

export default Home;