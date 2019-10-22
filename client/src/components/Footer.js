import React from 'react';
import styled from 'styled-components';
import { mainColor } from '../utils/theme';

const Footer = props => {
    return (
        <FooterStyle>
            <p>
                &copy;Copyright 2019 Gilbert
            </p>
        </FooterStyle>
    )
}


const FooterStyle = styled.div`
    background-color:${mainColor};
    height:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:white;
    text-align:center;
    p{
        margin-top:10px;
    }
`

export default Footer;

