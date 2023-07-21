import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 5px;
    font-size: 2.2rem;
    align-items: center;
    justify-content: center;
    background: none;
    color: ${({theme})=>theme.COLORS.LIGHT_300};

    svg {
        display: flex;
        margin: 1rem;
    }

    @media(min-width: 768px) {  
        span {
            display: flex;
            justify-content: center;
        }
    }
`