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
            <Header />
            <Box>
                <WrapperOne>
                    <Title>
                        Openmooc is a free online training course <Dot>.</Dot>
                    </Title>
                    <Link to="/lessons">
                        <CallToAction href="/courses">
                            <span>Browse courses </span><Carret/>
                        </CallToAction>
                    </Link>
                </WrapperOne>
            </Box>
            <Box count={2}>
                <WrapperTwo>
                    <Column>
                        <Circle>
                            <Icon>
                                <FontAwesomeIcon icon="fire" />
                            </Icon>
                        </Circle>
                        <Description>
                            Join a supportive community of millions of coders
                        </Description>
                    </Column>
                    <Column>
                        <Circle>
                            <Icon>
                                <FontAwesomeIcon icon="certificate" />
                            </Icon>
                        </Circle>
                        <Description>
                            Build projects and earn free certifications.
                        </Description>
                    </Column>
                    <Column>
                        <Circle>
                            <Icon>
                                <FontAwesomeIcon icon="briefcase" />
                            </Icon>
                        </Circle>
                        <Description>
                            Get experience by coding for nonprofits.
                        </Description>
                    </Column>
                </WrapperTwo>
            </Box>
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
     background-image: linear-gradient(to bottom right, #57995d, ${mainColor});
   display: flex;
   flex-direction:column;
   justify-content:flex-start;
`



const WrapperTwo = styled.div`
  background-color:white;
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
  align-items:center;
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

const Circle = styled.div`
  background-color: #880e4f;
  width:100px;
  height:100px;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:10px;
  color:white;
`

const Column = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`

const Box = styled.div`
   height:100vh;
   display:flex;
   background-color:mainColor;
   justify-content:center;
   align-items:center;
`

const Description = styled.p`
   color: white;
`

const Icon = styled.div`
  font-size:30px;
`

const Button = styled.button`
    width:300px;
    height: 60px;
    background-color:#1EE831;
    color:#e91e63;
    border:none;
    border-radius:3px;
    box-shadow: -1px 5px 5px rgba(0,0,0,0.3),-3px -4px 4px rgba(0,0,0,0.2);
`

export default Home;