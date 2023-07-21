import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 3.2rem;

    background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

    border-radius: 8px;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        svg {
            color: ${({theme, isNew})=> isNew ? theme.COLORS.LIGHT_500: theme.COLORS.LIGHT_100}
        }
    }

    input {
        height: 2rem;
        width: 10rem;
        padding-left: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        outline: none;
        border: none;

        align-items: center;
    }
`