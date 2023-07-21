import styled from 'styled-components'

export const Container = styled.footer`
    display: flex;
    grid-area: footer;
    padding: 2.9rem;
    align-items: center;
    justify-content: space-between;

    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;

    background-color: ${({theme})=> theme.COLORS.DARK_700};

    p {
        font-size: 1.2rem;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        text-align: end;
    }

    svg {
        width: 12rem;
    }

    svg path {
        fill: ${({theme})=> theme.COLORS.LIGHT_700}
    }

    @media(min-width: 768px) {
        padding-inline: 12.3rem;
    }
`