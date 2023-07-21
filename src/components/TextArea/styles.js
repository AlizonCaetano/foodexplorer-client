import styled from 'styled-components'

export const Container = styled.textarea`
    display: flex;
    padding: 1.6rem;

    background-color: ${({theme})=> theme.COLORS.DARK_900};
    color: ${({theme})=> theme.COLORS.LIGHT_400};

    font-size: 1.6rem;

    width: 100%;
    min-height: 17.2rem;

    border: none;
    border-radius: .8rem;

    resize: none;
`