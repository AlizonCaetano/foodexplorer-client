import styled from 'styled-components'

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    color: ${({theme})=> theme.COLORS.LIGHT_100};
    background-color: ${({theme})=> theme.COLORS.TOMATO_100};

    font-weight: 500;
    font-size: 1.4rem;

    height: 4.6rem;
    min-width: fit-content;
    margin: auto;
    padding: 0 2rem;

    border: none;
    border-radius: 5px;
`