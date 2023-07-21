import { Container, Banner } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Section } from '../../components/Section'
import { NotFound } from '../../components/Section/notFound'
import { DishCard } from '../../components/DishCard'
import background from '../../assets/banner.png'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'


export function Home(){
   
    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function fetchDishes() {
            const response = await api.get(`/dishes?search=${search}`)
            setDishes(response.data)
        }

        fetchDishes()
    }, [search])


    return  (
        <Container>
            <Header search={setSearch}/>
            <Banner>
                <div>
                    <img src={background} alt="Banner" />
                </div>

                <div>
                    <span>Sabores inigualáveis</span>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                </div>
            </Banner>
            <Section title="Refeições">
                {dishes.filter(dish => dish.category == "dishes").length > 0 ?
                    dishes.filter(dish => dish.category == "dishes").map((dish)=> (
                        <DishCard
                            key={String(dish.id)}
                            data={dish}
                        />
                    ))
                    :
                    <NotFound/> 
                }

            </Section>

            <Section title="Sobremesas">

                {dishes.filter(dish => dish.category == "desserts").length > 0 ?
                    dishes.filter(dish => dish.category == "desserts").map((dish)=> (
                        <DishCard
                            key={String(dish.id)}
                            data={dish}
                        />
                    ))
                    :
                    <NotFound/>
                }

            </Section>

            <Section title="Bebidas">

                {dishes.filter(dish => dish.category == "drinks").length > 0 ? 

                    dishes.filter(dish => dish.category == "drinks").map((dish)=> (
                        <DishCard
                            key={String(dish.id)}
                            data={dish}
                        />
                    )) 
                    :
                    <NotFound/>
                }

            </Section>

            <Footer/>
        </Container>
    )
}

