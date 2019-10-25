import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = props =>(
    <SearchStyle>
        <SearchButton>
            <FontAwesomeIcon icon="search"/>
        </SearchButton>
        <input type="search"/>
    </SearchStyle>
)



const searchBarColor="#05510d";

const SearchButton = styled.button`
    background-color:${searchBarColor};
    border:none;
    color:white;
`
const SearchStyle = styled.div`
    width:${100/3}%;
    border: 1px solid ${searchBarColor};
    border-radius:5px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    input{
        width:100%;
        background:${searchBarColor};
        border:none;
        color:white;
    }
`


export default Search;