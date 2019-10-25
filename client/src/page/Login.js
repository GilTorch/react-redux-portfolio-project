import React from 'react';
import { Link } from 'react-router-dom';
import { mainColor, mainFont, secondaryFont } from '../utils/theme';
import styled from 'styled-components';
import Facebook from '../svg/facebook';

const Login = props => {

    const [iconColor,setIconColor] = React.useState("#475993")

    return (
        <LoginStyle>
            <FormStyle>
                <FacebookLogin onMouseEnter={()=>setIconColor("#fff")} onMouseLeave={()=>setIconColor("#475993")}>
                    <Facebook fill={iconColor}/> Log in with facebook
            </FacebookLogin>
                <Or>
                    or
            </Or>
                <div>
                    <div>
                        <input name="email" type="email" placeholder="email" />
                    </div>
                    <div>
                        <input name="password" type="password" placeholder="password" />
                    </div>
                </div>
                <Submit>
                    Login
        </Submit>
                <div>
                    <p>
                        No account? <Link to="/">Register</Link>
                    </p>
                </div>
            </FormStyle>
        </LoginStyle>
    )
}

const LoginStyle = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`

const FacebookLogin = styled.button`
    width:100%;
    background-color:white;
    border: 3px solid #3b5998;
    color:#3b5998;
    border-radius:5px;
    height:50px;
    margin-bottom:10px;

    &:hover{
        background-color:#3b5990;
        color:white;
    }
`


const Or = styled.p`
    text-align:center;
    font-size:20px;
    font-weight:bold;
`

const FormStyle = styled.form`
    width:500px;
    background-color:white;
    color:${mainColor};
    padding:2%;
    font-family:${mainFont},sans-serif;
    hr{
        height:2px;
        margin-bottom:20px;
        background: linear-gradient(
            to right, 
            rgb(255,255,255) 0%, 
            ${mainColor} 55%, 
            ${mainColor} 55%, 
            rgb(255,255,255) 100%);
    }


    h2{
        text-align:center;
        margin-top:20px;
        margin-bottom:20px;
        font-family:${secondaryFont},serif;
    }

    label{
        display:block;
        font-weight:bold;
    }

    input{
        width:100%;
    }

    input[type="password"],input[type="email"]{
        border: none;
        background-color:#eee;
        height:40px;
        border-radius:5px;
        padding-left:9px;
    }


    div{
        margin-bottom:20px;
    }

    div > p{
        color:black;
        margin-top:20px;
    }
`


const Submit = styled.button`
    width:100%;
    background-color:${mainColor};
    border:none;
    height:50px;
    border-radius:5px;
    color:white;

    &:hover{
        background-color:#eee;
        color:white;
    }
`



export default Login;