import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    place-content: center;

    span {
        color: ${({theme})=> theme.COLORS.CAKE_200};
        font-size: 1.1rem;
        margin-top: 5px;
    }

    @media(min-width: 768px) {
        flex-direction: column;
        align-items: end;
        gap: 0;
    
        span {
            margin-top: 0;
        }
    }
`   