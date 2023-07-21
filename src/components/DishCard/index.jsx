import { Container, BuyInput } from './styles'

import imgDefault from '../../assets/image_default.png'
import { Button } from '../Button'
import { Counter } from '../Counter'

import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlinePencilSquare } from 'react-icons/hi2'

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

export function DishCard({ data,...rest}){

    const { user } = useAuth()

    const [quantity, setQuantity] = useState(1)

    const increase = () => {
        if (quantity > 19) {
            alert("Max itens added: 20un")
            return;
        }
        setQuantity(count => count + 1);
    }
     
    const decrease = () => {
        if (quantity < 2) {
            return
        }
        setQuantity(count => count - 1);
    }


    return(
        <Container {...rest}>
            { user.isAdmin ?
                <Link to={`/dishes/edit/${data.id}`}>
                    < HiOutlinePencilSquare id="edit" size={24}/>
                </Link>
                :
                <AiOutlineHeart id="favorite" size={24}/>
            }

            <Link to={`/dishes/${data.id}`}>
                <img src={data.image == 'null' ? imgDefault : `${api.defaults.baseURL}/files/${data.image}`}/>
                <h3>{data.title + ' >'}</h3>
                <p>{data.description}</p>
                <span>R$ {Number(data.price).toFixed(2)}</span>
            </Link>
            
            { !user.isAdmin &&
                <BuyInput>
                    <Counter className="counter"/>
                    <Button text="incluir"/>
                </BuyInput>
            }

        </Container>
    )
}