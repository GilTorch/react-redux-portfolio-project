import React from 'react';
import Logo from '../svg/Logo';
import styled from 'styled-components';
import { mainColor } from '../utils/theme';

const Header = props => (
    <header>
        <Nav>
            <a href="#"><Logo /></a>
            <NavLinks>
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Courses</Link>
                <Link href="#">Contact</Link>
                <Register>
                        Register
                </Register>
            </NavLinks>
        </Nav>
    </header>
)



const Nav = styled.div`
    width:100%;
    height:80px;
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    align-items:center;
    border-bottom: 1px solid rgba(255,255,255,0.1);
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

const Link = styled.a`
    color:white;
    font-family: 'Raleway', sans-serif;
    &:hover{
        color:white;
    }
`
const Register = styled.a`
    border: 1px solid white;
    padding:3%;
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