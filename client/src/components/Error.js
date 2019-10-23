import React from 'react';
import styled from 'styled-components';

const Error = ({ children }) => (
    <ErrorStyle>
        { children }
    </ErrorStyle>
)

const ErrorStyle = styled.p`
    width:100%;
    background:pink;
    color:red;
    text-align:center;
    padding:1%;
`
export default Error;