import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainColor, mainFont, secondaryFont } from '../utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = props => (
    <FormStyle>
        <h2>Register</h2>
        <hr />
        <div>
            <div>
                <FontAwesomeIcon icon="user" />
                <label>Choose a profile picture:</label>
                <input name="profilePicture" type="file" />
            </div>
            <FormGroupRow>
                <div>
                    <label> First name:</label>
                    <input name="firstname" placeholder="John" type="text" />
                </div>
                <div>
                    <label> Last name:</label>
                    <input name="lastname" placeholder="Doe" type="text" />
                </div>
            </FormGroupRow>
            <FormGroupRow>
                <div>
                    <label> Username:</label>
                    <input name="username" placeholder=" johndoe41" type="text" />
                </div>
                <div>
                    <label> Email:</label>
                    <input name="email" type="email" placeholder="johndoe@gmail.com" />
                </div>
            </FormGroupRow>
            <div>
                <label> Password</label>
                <input name="password" type="password" />
            </div>
            <div>
                <label> Confirm your password</label>
                <input name="passwordConfirm" type="password" />
            </div>
        </div>
        <div>
            <p>
                Already have an account? <Link to="/login">Log in</Link>
            </p>
        </div>
        <Submit>
            Submit
        </Submit>
    </FormStyle>
)

const FormStyle = styled.form`
    background-color:white;
    border-radius: 5px;
    color:${mainColor};
    padding:2%;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    font-family:${mainFont},sans-serif;

    hr{
        height:2px;
        margin-bottom:40px;
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

    input[type="text"],input[type="password"],input[type="email"]{
        background-color:#eee;
        height:40px;
        border-radius:5px;
        border:none;
        padding-left:9px;
    }

    input[type="password"]{
        width:100%;
    }

    div{
        margin-bottom:10px;
    }

    div > p{
        color:black;
    }
`

const FormGroupRow = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    div{
        width:50%;
        margin:2%;
        flex-direction:column;
        align-items:center;
    }
`

const Submit = styled.button`
    width:100%;
    background-color:#0590B5;
    border:none;
    height:50px;
    border-radius:5px;
    color:white;
`


export default Form;