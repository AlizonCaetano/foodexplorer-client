import { Container, Content, TagList, Order } from './styles'

import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Tag } from '../../components/Tag'
import { Counter } from '../../components/Counter'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import imgDefault from '../../assets/image_default.png'

import { RxCaretLeft } from 'react-icons/rx'
import { TfiReceipt } from 'react-icons/tfi'

import { api } from '../../services/api'

export function DishDetails(){
    const [data, setData] = useState(null)
    const params = useParams()
    const navigate = useNavigate()
    
    const { user } = useAuth()
    
    const [ image, setImage ] = useState(null)
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ ingredients, setIngredients ] = useState([])
    const [ price, setPrice ] = useState('')

    useEffect(() => {
        async function fetchDish() {
            const dishInfo = await api.get(`/dishes/${params.id}`)
            
            const { title, image, description, category, price, ingredients } = dishInfo.data

            setTitle(title)
            setImage(image)
            setDescription(description)
            setCategory(category)
            setPrice(price)
            setIngredients(ingredients.map(ingredient => ingredient.name))
        }
    
        fetchDish()
    }, [])

    function handleBack(){
        navigate('/')
    }

    return(
        <Container>
            <Header/>
                      
            <main>
                <ButtonText onClick={handleBack} text="voltar" icon={RxCaretLeft}/>
            <Content>
            <img src={ image == 'null' ? imgDefault : `${api.defaults.baseURL}/files/${image}` } /> 
            <div className="dish-infos">
            <h3> { title } </h3>
            <p> { description } </p>

            <TagList>
                { 
                    ingredients &&
                    ingredients.map((ingredient, index) =>(
                        <Tag 
                            key={String(index)}
                            name={ingredient}
                        />
                    ))    
                }
            </TagList>

            <Order>
                { 
                    user.isAdmin ?

                    <Link to={`/dishes/edit/${params.id}`}>
                        <div className="price">R$ {price}</div>
                        <Button 
                            className='editBtn'
                            text="Editar prato"
                        />
                    </Link>
                    :
                    <>
                        <Counter/>
                        <Button text={`pedir - RS ${price}`} icon={ TfiReceipt }/>
                    </>
                }
            </Order>
            </div>

            </Content>
            </main>

            <Footer/>       
        </Container>
    )
}