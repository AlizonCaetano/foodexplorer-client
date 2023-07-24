import { Container, Content } from './styles'

import { Brand } from '../../components/Brand'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Link } from "react-router-dom"

import { useState } from 'react'

import { api } from '../../services/api'

export function SignUp(){
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    function handleSignUp() {
         api.post('/user', { name, email, password })
        .then(()=> {
            alert('User register sucessfull!')
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            if(err.response){
                alert(err.response.data.message)
            } else(
                alert(err.response.data.message)
            )
        })
    }

    return(
        <Container>
            <Brand/>
            <Content>
                <h3>Crie sua conta</h3>
                <label htmlFor="email" aria-required>Seu nome</label>
                <Input onChange={ e => setName(e.target.value)} 
                id="name" type="text" placeholder="Exemplo: Maria da Silva"/>

                <label htmlFor="email">Email</label>
                <Input onChange={ e => setEmail(e.target.value)} 
                id="email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br"/>

                <label htmlFor="email">Senha</label>
                <Input onChange={ e => setPassword(e.target.value)} 
                id="password" type="password" placeholder="No mínimo 6 caracteres"/>
                
                <Button onClick={ handleSignUp } text="Salvar"/>
                
                <Link to="/">
                    <ButtonText text="Já tenho uma conta"/>
                </Link>
            </Content>
        </Container>
    )
}
