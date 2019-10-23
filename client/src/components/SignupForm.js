import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mainColor, mainFont, secondaryFont } from '../utils/theme';
import * as yup from 'yup';
import useForm from 'react-hook-form';
import Error from './FormError';
import UploadPicture from '../components/UploadPicture';

const validationSchema = yup.object().shape({
    profilePicture: yup.string(),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    userName: yup.string().required("Username is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8, "Password should be at least 8 characters").required("You have to choose a password"),
    passwordConfirm: yup.string().required("Confirm the password")
        .oneOf([yup.ref('password'), null], "Passwords are not the same")
})

const SignupForm = props => {

    const { register, handleSubmit, errors, setValue } = useForm({
        validationSchema
    });

    const onSubmit = data => {
        console.log(JSON.stringify(data));
    }

    const setProfilePicture = picture => {
        setValue("profilePicture", picture)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="upload-picture-container">
                    <UploadPicture  onPicture={setProfilePicture} />
                    <input type="text" 
                        hidden={true}
                        name="profilePicture"
                        ref={register}
                    />
                </div>
                <FormGroupRow>
                    <div>
                        <label> First name:</label>
                        <input name="firstName" placeholder="John" ref={register} type="text" />
                        {errors.firstName && <Error>{errors.firstName.message}</Error>}
                    </div>
                    <div>
                        <label> Last name:</label>
                        <input name="lastName" placeholder="Doe" ref={register} type="text" />
                        {errors.lastName && <Error>{errors.lastName.message}</Error>}
                    </div>
                </FormGroupRow>
                <FormGroupRow>
                    <div>
                        <label> Username:</label>
                        <input name="userName" placeholder="johndoe41" ref={register} type="text" />
                        {errors.userName && <Error>{errors.userName.message}</Error>}
                    </div>
                    <div>
                        <label> Email:</label>
                        <input name="email" type="email" placeholder="johndoe@gmail.com" ref={register} />
                        {errors.email && <Error>{errors.email.message}</Error>}
                    </div>
                </FormGroupRow>
                <div>
                    <label> Password</label>
                    <input name="password" type="password" ref={register} />
                    {errors.password && <Error>{errors.password.message}</Error>}
                </div>
                <div>
                    <label> Confirm your password</label>
                    <input type="password" name="passwordConfirm" ref={register} />
                    {errors.passwordConfirm && <Error>{errors.passwordConfirm.message}</Error>}
                </div>
            </div>
            <div className="have-account">
                <p>
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
            </div>
            <Submit>
                Sign up
        </Submit>
        </Form>
    )

}

const Form = styled.form`
    width:500px;
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

    input{
        width:100%;
    }

    div{
        margin-bottom:10px;
    }

    div.have-account{
        color:black;
    }

    div.upload-picture-container {
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
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


export default SignupForm;