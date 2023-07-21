import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    place-content: center;

    @media(min-width: 768px) {
        flex-direction: column;
        align-items: end;
    }
`   