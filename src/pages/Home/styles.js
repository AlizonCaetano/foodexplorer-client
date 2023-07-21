import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: ${({theme})=> theme.COLORS.DARK_400};
    
    width: 100%;
    height: 100vh;

    .swiper-button-next, .swiper-button-prev {
        visibility: hidden;
    }

    @media (min-width: 768px){
    .swiper-button-next, .swiper-button-prev {
        visibility: visible;
    }

    .swiper-button-prev:before {
        content: '';
        display: flex;
        height: 50rem;
        width: 190px;
        position: absolute;

        background: linear-gradient(to left, rgb(76 101 113 / 0%) 0%, rgb(0, 10, 15) 55%, rgb(0, 10, 15) 30%);
    }

    .swiper-button-next:before {
        content: '';
        display: flex;
        height: 50rem;
        width: 190px;
        position: absolute;

        background: linear-gradient(to right, rgb(76 101 113 / 0%) 0%, rgb(0, 10, 15) 55%, rgb(0, 10, 15) 30%);
    }

    .swiper-button-prev::after,
    .swiper-button-next:after {
        z-index: 1;
    }
}
`

export const Banner = styled.div`
    display: block;
    position: relative;

    img {
        width: 97%;
    }

    & > div:nth-child(2) {
            position: absolute;
            top: 40%;
            right: 1rem;
            width: 50%;
    }

    span {
        font-size: 1.8rem;
    }
        
    p {
        font-size: 1.2rem;
    }

    @media (min-width: 768px){

        & > div:nth-child(2) {
            position: absolute;
            top: 50%;

            span {
                font-size: 3rem;
            }
            
            p {
                font-size: 1.4rem;
            }
        }
    }

    @media (min-width: 980px){
        & > div:nth-child(2) {
            position: absolute;
            top: 50%;
        span {
            font-size: 4rem;
        }
        
        p {
            font-size: 1.9rem;
        }
    }
    }
`