import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.4rem;
    width: 21rem;
    height: 29rem;

    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ${({theme})=> theme.COLORS.CAKE_200};
    }
    
    background-color: ${({theme})=> theme.COLORS.DARK_200};
    border-radius: 8px;

    h3 {
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        font-size: 1.4rem;
        font-weight: 600;
    
        display: -webkit-box; 
        -webkit-line-clamp: 1; 
        -webkit-box-orient: vertical; 
        overflow: hidden; 
        text-overflow: ellipsis; 
        text-align: center;
    }

    p {
        display: none;
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }

    img {
        width: 8.8rem;
        height: auto;
        margin: 1.2rem;
    }

    span {
        display: inline-flex;
        width: 100%;
        justify-content: center;
        margin-top: 2rem;   
    }

    #favorite,
    #edit {
        display: flex;
        position: absolute;
        top: 2.4rem;
        right: 2.4rem;
    }

    @media (min-width: 768px) {
        width: 27rem;
        height: 46rem;

        img {
            max-height: 16.8rem;
            width: 16rem ;
            height: auto;
            margin: 1.2rem;
        }

        h3 {
            font-size: 2rem;
            display: -webkit-box; 
            -webkit-line-clamp: 1; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis; 
        }

        p {
            display: block;
            font-size: 1.3rem;
            color: ${({ theme })=> theme.COLORS.LIGHT_400};
            line-height: 1.6rem;
            margin-bottom: 1.5rem;

            display: -webkit-box; 
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical; 
            overflow: hidden; 
            text-overflow: ellipsis; 
        }

        & > a {
            font-size: 2.5rem;
            color: ${({ theme })=> theme.COLORS.CAKE_200};
            text-align: center;
            
            span {
                margin-top: 2rem;
            }
        }
        

    }

`

export const BuyInput = styled.div`
    padding: 0;
    font-size: 1.3rem;

    button { 
        height: 3rem;
        padding: 0 5rem;
    }
    
    span {
        margin-top: 0;
        font-size: 1.6rem;
    }

    @media (min-width: 768px){
        display: flex;
        padding: 1rem;
        align-items: center;

        button { 
            padding: 0 3rem;
        }
    }
`