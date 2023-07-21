import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7rem;

    height: 100vh;
    width: 100%;

    padding: 4.7rem;
    
    svg {
        height: 4.4rem;
        width: auto;
    }

    @media(min-width: 768px) {
        svg {
            margin: auto;
        }

        display: grid;
        grid-template-columns: 1fr 1fr;

        place-content: center;
        flex-direction: row;

        svg {
            margin: auto;
        }
    }
`

export const Content = styled.form`
    font-family: ${({theme})=> theme.FONTS.ROBOTO};
    
    input {
          border-radius: .8rem;
        }
    
    h3 {
        display: none;
    }


    label {
        color: ${({theme})=> theme.COLORS.LIGHT_400};
        display: flex;
        margin-block: 32px 8px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
    }

    button{
        display: block;
        align-self: center;
        font-size: 1.4rem;
        margin-top: 3.2rem;
        width: 100%;
    }

    @media(min-width: 768px) {
        place-content: center;
        flex-direction: row;
        margin: auto;
    
        background-color: ${({theme})=> theme.COLORS.DARK_700};

        width: 47.6rem;
        padding: 6.4rem;
        border-radius: 16px;

        h3 {
            display: block;
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            font-family: ${({theme})=> theme.FONTS.POPPINS};
            text-align: center;
            font-weight: 400;
            font-size: 3.2rem;
        }

        input {
            width: 100%;
        }

        div {
            width: initial;
        }
    }
`