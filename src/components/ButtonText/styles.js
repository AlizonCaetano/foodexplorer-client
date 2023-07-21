import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    height: 3.2rem;

    font-family: ${({theme})=> theme.FONTS.POPPINS};
    font-weight: 500;
    font-size: 2.4rem;
    color: ${({theme})=> theme.COLORS.LIGHT_300};
    line-height: 3.2rem;

    background-color: transparent;
    border: none;

    transition: all .25s;

    &:hover {
        color: ${({theme})=> theme.COLORS.TOMATO_100};
    }
`