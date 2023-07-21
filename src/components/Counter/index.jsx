import { Container } from './styles'

import { RxMinus, RxPlus } from 'react-icons/rx'

import { useState, useEffect } from 'react'

export function Counter(){
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        if (quantity > 19) {
            alert('Erro: A quantidade máxima é de 20 unidades')
            return
        }
        setQuantity(count => count + 1)
    };
     
    const decrease = () => {
        if (quantity < 2) {
            alert('Erro: A quantidade mínima é 1 unidade')
            return
        }
        setQuantity(count => count - 1);
    };

    return(
        <Container>
            <span onClick={decrease}><RxMinus size={24}/></span>
            <span>{String(quantity).padStart(2, "0")}</span>
            <span onClick={increase}><RxPlus size={24}/></span>
        </Container>
    )
}