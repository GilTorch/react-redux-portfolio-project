import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = props =>(
    <SearchStyle>
        <SearchButton>
            <FontAwesomeIcon icon="search"/>
        </SearchButton>
        <input type="search" placeholder="Search for anything" />
    </SearchStyle>
)



const searchBarColor="#05510d";

const SearchButton = styled.button`
    background-color:${searchBarColor};
    border:none;
    color:white;
    width:50px;
    height:100%;
    &:hover{
        background-color:white;
        color:${searchBarColor};
    }

`
const SearchStyle = styled.div`
    width:${100/3}%;
    height:40px;
    border: 1px solid ${searchBarColor};
    border-radius:5px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

    input{
        width:100%;
        height:100%;
        background:${searchBarColor};
        border:none;
        color:white;
        padding-left:6px;
        &::placeholder{
            color:rgb(234,234,234);
        }
        &::focus{
            border:none;
        }
    }
`


export default Search;