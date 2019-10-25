import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import Logo from '../svg/Logo';
import styled from 'styled-components';
import { mainColor } from '../utils/theme';

const Header = props => (
    <HeaderStyle>
        <Nav>
            <Link to="/">
               <Logo />
            </Link>
            <NavLinks>
                <Link to="/">
                    <LinkStyle>Home</LinkStyle>
                </Link>
                <Link to="/about">
                    <LinkStyle>About</LinkStyle>
                </Link>
                <Link to="/courses">
                    <LinkStyle>Courses</LinkStyle>
                </Link>
                    <Register>
                        <HashLink to="/#register">
                            <span>
                                Register
                            </span>
                        </HashLink>
                    </Register>
            </NavLinks>
        </Nav>
    </HeaderStyle>
)

const HeaderStyle = styled.div`
   background-image: linear-gradient(to right,#57995D, ${mainColor});
   width:100%;
   position:absolute;
   top:0;
   left:0;
   height:60px;
   flex-direction:row;
   justify-content: space-around;
   align-items:center;
`


const Nav = styled.div`
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    /* border-bottom: 1px solid rgba(255,255,255,0.1); */
`

const NavLinks = styled.div`
    width:${100 / 3}%;
    height:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    list-style-type:none;
`

const LinkStyle = styled.span`
    color:white;
    font-family: 'Raleway', sans-serif;
    &:hover{
        color:white;
    }
`
const Register = styled.a`
    display:inline-block;
    border: 1px solid white;
    padding:2%;
    font-family: 'Raleway', sans-serif;
    span{
        color:white;
    }
    
    &:hover{
        background-color:white;
        color:black;
        cursor:pointer;
        transition:0.3s;
        box-shadow: 0px 3px 3px rgba(0,0,0,0.2);
        span{
            color: ${mainColor}
        }
    }
`



export default Header;