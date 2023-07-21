import React from 'react';

import { Container } from './styles'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function Section({title, children, ...rest}){
    return(
        <Container {...rest}>
            <h2>{title}</h2>

            <Swiper className="carousel-container"
                modules={[Navigation]}
                navigation
                scrollbar
                slidesPerView= {2}
                spaceBetween={12}
                grabCursor={true}
                breakpoints= { 
                    {
                        1400: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        }, 
                        1024: {
                            slidesPerView: 3
                        }, 

                        980: {
                            slidesPerView: 2.5,
                            spaceBetween: 100
                        }, 

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 60
                        }, 
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        }
                    }
                }
            >
                {
                    React.Children.map(children, (child)=>{
                        return (<SwiperSlide>{ child }</SwiperSlide>)
                    })
                }

            </Swiper>                  
        </Container>
    )
}