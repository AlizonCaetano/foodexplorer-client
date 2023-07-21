import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding-block: 2.4rem;
    padding-left: 2.4rem;

    height: 100%;
    
    h2{
        font-size: 1.8rem;
        font-weight: 500;
    }

    h3.not-found {
        position: absolute;
        left: 0px;
        top: 0px;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-button-prev, .swiper-rtl .swiper-button-next {
        left: var(--swiper-navigation-sides-offset, -3px);
    }

    .swiper-button-next, .swiper-rtl .swiper-button-prev {
        right: var(--swiper-navigation-sides-offset, -3px);
    }

    @media (min-width: 768px) {
        padding-inline: 3.3rem;
        
        h2{
            font-size: 4rem;
        }      

        .swiper-button-prev {
            background: linear-gradient(to left, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%, transparent 100%);
        }

        .swiper-button-next {
            background: linear-gradient(to right, transparent 0%, ${({ theme }) => theme.COLORS.BACKGROUND_900} 100% 0%, transparent 100%);
        }

        .swiper-slide {
            > div {
                transition: .25s;
                border: none;

                &:hover {
                    box-shadow: 0px 0px 40px -30px ${({ theme })=> theme.COLORS.CAKE_200};
                } 

                img {
                    transition: .25s;
                    border-radius: 50%;

                    &:hover {
                        transform: scale3d(1.1, 1.1, 1.1);
                        box-shadow:0px 0px 40px -30px ${({ theme })=> theme.COLORS.CAKE_200};
                    }
                }
            }
        }
    }

    @media (min-width: 980px) {
        padding-inline: 12.3rem; 
    }
`