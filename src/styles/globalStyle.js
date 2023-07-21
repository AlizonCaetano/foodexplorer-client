import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        -webkit-font-smoothing: antialiased;
    }

    :root{
        font-size: 62.5%;
    }

    ::-webkit-scrollbar {
        width: 1rem !important;
        height: 0.6rem !important;
        border-radius: 9999px;
    }
    
    ::-webkit-scrollbar-track {
        background-color: ${({theme})=> theme.COLORS.DARK_400};
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        border: solid 10px transparent;
        border-radius: 80px;
    }

    body, input, button, textarea, a, ul, li{
        font-size: 1.6rem;
        font-family: ${({theme})=> theme.FONTS.POPPINS};

       
    }
    
    body {
        width: 100%;
        height: 100vh;
        background-color: ${({theme})=> theme.COLORS.DARK_400};
        font-family: ${({theme})=> theme.FONTS.POPPINS};
        color: ${({theme})=> theme.COLORS.LIGHT_300};
        -webkit-font-smoothing: antialiased;
    }

    button{
        transition: all .25s;
        cursor: pointer;
    }

    button:hover{
        filter: brightness(1.1);
    }

`