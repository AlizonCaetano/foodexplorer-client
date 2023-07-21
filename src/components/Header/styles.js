import styled from 'styled-components'

export const Container = styled.header`
    display: flex;
    grid-area: header;
    justify-content: space-between;
    align-items: center;
    position: relative;
    
    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({theme})=> theme.COLORS.DARK_700};
    min-height: 11.4rem;

    .searchInput {
        display: none;
    }

    .receiptAdmin {
        visibility: hidden;
    }

    .receiptAdmin span {
        display: none;
    }

    @media(min-width: 768px) {
        padding-inline: 3.3rem;
        
        .searchInput {
            display: flex;
        }

        .receiptAdmin {
        visibility: visible;
        }

        .receiptAdmin span {
            display: flex;
        }
    }

    @media(min-width: 980px) {
        padding-inline: 12.3rem;
    }
`

export const MenuMobile = styled.div`
    display: flex;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    transition: all .1s;

    #menu-closed {
        transform: translateY(-1000px);
    }

    #menu-opened {
        opacity: 0;
        width: 0;
        height: 0;
        transform: translateY(-2000px);
    }

    #menu-opened {
        background-color: ${({theme})=> theme.COLORS.DARK_400};
    }

    #menu-opened span {
        display: flex;
        justify-content: flex-start;
        align-items: end;
        gap: 1.6rem;
        
        padding: 2.8rem;
        height: 11.6rem;
        width: 100%;
        
        background-color: ${({theme})=> theme.COLORS.DARK_700};

        font-size: 2.1rem;
        font-family: 'Roboto';
        font-weight: 400;
        padding-left: 1.6rem;
    }

    #menu-opened .menu-content {
        width: 100%;
        height: max-content;
        background-color: ${({theme})=> theme.COLORS.DARK_700};
        padding: 2.8rem;

        a span{
            color: ${({theme})=> theme.COLORS.LIGHT_100};
            border-bottom: 1px solid ${({theme})=> theme.COLORS.DARK_900};

            &.exit {
                border: none;
                width: 2rem;
            }
        }
    }

    #menu-opened .menu-content .searchInput {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${({theme})=> theme.COLORS.DARK_900};
        border-radius: .8rem;
        
        svg {
            border-radius: .8rem;
            margin-right: 10%;
        }
    }

    #menu-opened.active,
    #menu-closed.active {
        transition: all .3s;
        opacity: 1;
        transform: translateX(0px);
    }

    #menu-opened.active {
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;

        height: max-content;
        width: 100%;

        box-shadow: 0px 0px 25px -9px ${({theme})=> theme.COLORS.CAKE_100};
    }

    @media(min-width: 768px) {
        display: none;
    }
`

export const Receipt = styled.div`
    display: flex;
    color: ${({theme})=> theme.COLORS.LIGHT_100};
    position: relative;

    span {
        display:flex;
        height: 2rem;
        width: 2rem;
        justify-content: center;
        position: absolute;
        right: -8px;
        top: -8px;
        
        background-color: ${({theme})=> theme.COLORS.TOMATO_100};
        color: ${({theme})=> theme.COLORS.WHITE};
        
        font-family: ${({theme})=> theme.FONTS.POPPINS};
        font-size: 1.4rem;

        border-radius: 50%;
       }

       span:nth-child(2){
          display: none;
        }

    @media(min-width: 768px) {
        background-color: ${({theme})=> theme.COLORS.TOMATO_100};
        width: 16.6rem;
        height: 5.6rem;
        border-radius: 5px;

        align-items: center;
        justify-content: space-evenly;
        
        span:nth-child(1){
            width: fit-content;
        }

        span:nth-child(2){
          display: flex;
        }

        span {
            padding-top: 15px;
            position: relative;
            background: none;
            width: fit-content;
            align-items: center;
        }
    }

    @media(min-width: 980px) {
        width: 19.6rem;
        height: 5.6rem;
    }
`

export const Logout = styled.button`
    display: none;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;

    color:  ${({theme})=> theme.COLORS.LIGHT_100};


    @media(min-width: 768px) {
        display: flex;
    }
`

