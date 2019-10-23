import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import SignUpForm from '../components/SignupForm';
import { mainColor, mainFont, secondaryFont } from '../utils/theme';
import Carret from '../svg/carret';
import imgBackground from '../images/cta2-background.jpg'
import RocketIcon from '../svg/rocket';
import CertificateIcon from '../svg/certificate';
import ExperienceIcon from '../svg/experience';

const Home = () => {
    return (
        <HomeStyle>
            <Box>
                <Header />
                <InnerWrapperBox1>
                    <Title>
                        Openmooc is a free online training course <Dot>.</Dot>
                    </Title>
                    <Link to="/lessons">
                        <CallToAction href="/courses">
                            <span>Get started </span><Carret />
                        </CallToAction>
                    </Link>
                </InnerWrapperBox1>
            </Box>
            <Box1>
                <h2>Love to learn? You've come to the right place</h2>
                <InnerWrapperBox2>
                    <div class="icons-circles-texts">
                        <div>
                            <Circle>
                                <RocketIcon width="1.5em" height="1.5em" color="#fff" />
                            </Circle>
                            <p>
                                Join a supportive community of millions of coders
                            </p>
                        </div>
                        <div>
                            <Circle>
                                <CertificateIcon width="1.5em" height="1.5em" color="#fff" />
                            </Circle>
                            <p>
                                Build projects and earn free certifications.
                            </p>
                        </div>
                        <div>
                            <Circle>
                                <ExperienceIcon width="1.5em" height="1.5em" color="#fff" />
                            </Circle>
                            <p>
                                Get experience by coding for nonprofits.
                            </p>
                        </div>
                    </div>
                    <img src={require("../images/about.png")} />
                </InnerWrapperBox2>
            </Box1>
            <Box2>
                <SignUpForm />
            </Box2>
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
    font-family: ${mainFont}, sans-serif;
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

const InnerWrapperBox2 = styled.div`
    display:flex;
    flex-direction:row;
    /* border: 1px solid red; */
    justify-content:space-around;
    align-items:center;
    color:${mainColor};
    margin-top:50px;
    div.icons-circles-texts{
        width:45%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        /* border: 1px solid blue; */
        div{
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            align-items:center;
            /* border: 1px solid green; */
            padding:1%;
            p{
                width:60%;
                font-size: 1.5em;
                text-align:left;
            }
        }
    }

    img{
        width:400px;
    }
`
const Circle = styled.div`
  width:75px;
  height:75px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: ${mainColor};
  border-radius:50%;
  font-size:24px;
  color:white;
`


const InnerWrapperBox1 = styled.div`
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
font-family:${secondaryFont};
`
const Dot = styled.span`
  font-size:100px;
`

let boxHeight = "100vh";

const Box = styled.div`
   background-image: linear-gradient(to bottom right, #57995d, ${mainColor});
   height:${boxHeight};
   display:flex;
   flex-direction:column;
`

const Box1 = styled.div`
   background-color:white;
   height:${boxHeight};
   display:flex;
   flex-direction: column;
   padding-top:50px;
   text-align:center;
   h2{
       color:${mainColor};
       font-family:${secondaryFont};
   }
   
`

const Box2 = styled.div`
    background:url(${imgBackground});
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:40px;
    padding-bottom:40px;
`

export default Home;