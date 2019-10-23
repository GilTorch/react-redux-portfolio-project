import React from 'react';
import styled from 'styled-components';

const FormError = ({ children }) => (
    <ErrorStyle>
        { children }
    </ErrorStyle>
)

const ErrorStyle = styled.p`
    width:100%;
    background:rgba(255,0,0,0.1);
    color:red;
    text-align:center;
    padding:2%;
    margin-top:10px;
    border-radius:5px;;
`
export default FormError;