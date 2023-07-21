import styled from 'styled-components'

export const Container = styled.span`
    margin: 1.2rem;
    padding: .4rem .8rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({theme})=> theme.COLORS.LIGH_100};
    font-family: ${({theme})=> theme.COLORS.LIGHT_100};
 
    border-radius: 5px;
    background-color: ${({theme})=> theme.COLORS.DARK_1000};

    @media(min-width: 768px) {
        margin-left: 0;
        margin-right: 1.2rem;
    }
`