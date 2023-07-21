import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${({theme})=> theme.COLORS.DARK_900};
    color: ${({theme})=> theme.COLORS.LIGHT_500};
    border-radius: 8px;

    input {
        background-color: transparent;
        border: none;
        padding: 1.5rem;
        width: 100%;
        height: 100%;
        color: ${({theme})=> theme.COLORS.LIGHT_500};

        outline: none;
    }

    svg {
        margin-left: 1.6rem;
    }

    svg path {
        color: ${({theme})=> theme.COLORS.LIGHT_500};
    }

    @media(min-width: 768px) {

            width: 35vw;
            height: 4.8rem;

            input {
                width: 100%;
            }
    }
`