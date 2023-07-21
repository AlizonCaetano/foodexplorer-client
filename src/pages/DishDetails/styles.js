import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    
    height: 100vh;
    grid-template-rows: 11.4rem auto 7.7rem;
    grid-template-areas: 
    "header" 
    "content" 
    "footer";
    main {
        padding: 3.4rem 1rem;
    }

    @media(min-width: 768px) {
    
        main {
            display: flex;
            flex-direction: column;
            padding: 4rem;
            gap: 20px;
            
            img {
                max-height: 39rem !important;
            }
            
            div {
                align-items: center;
                justify-content: flex-start;
                height: 100%;
            }
         
        }
    }   
`

export const Content = styled.div`
    button:nth-child(1){
        display: flex;
        margin: 3rem 4.1rem;
    }

    .dish-infos{
        div {
            margin: 0;
            display: flex;
            justify-content: center;
        }
    }

    grid-area: content;
    background-color: none;
    text-align: center;

    padding: 0 5.6rem 3.6rem;
    color: ${({theme})=> theme.COLORS.LIGHT_300};

    h3 {
        font-size: 2.7rem;
        font-weight: 500;
        margin: 1.6rem 0 2.4rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 300;
        line-height: 2.2rem;
        margin-bottom: 2.4rem;
    }

    span {
        display: flex;
    }

    img {
            width: 100%;
    }

    @media(min-width: 768px) {
        display: flex;
        text-align: start;
        justify-content: space-between;
        padding-inline: 12.3rem;

        img {
            max-width: 39rem;
        }

        h3 {
            font-size: 4rem;
        }
    
        p {
            font-size: 2.4rem;
            line-height: 140%;
        }

        .dish-infos{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;

            padding: 6.7rem 0 6.7rem 6.7rem;
        }
    }
`

export const TagList = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    margin-bottom: 4.8rem;


    @media(min-width: 768px) {  
        justify-content: start;
        padding: 0;
    }

`
export const Order = styled.div`
    display: flex; 
    justify-content: space-between;

    .price {
        color: ${({theme})=> theme.COLORS.CAKE_200};
        font-size: 2rem;
        padding-bottom: 1rem;
    }

    @media(min-width: 768px) {  
        gap: 20px;

        button:nth-child(1){
            margin: 0;
        }

        .price {
            color: ${({theme})=> theme.COLORS.CAKE_200};
            font-size: 3rem;
            padding-bottom: 1rem;
        }

       
    }
`