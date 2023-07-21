import { Container, Content } from './styles'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Brand } from '../../components/Brand'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Link } from "react-router-dom"

export function SignIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <Brand/>
            <Content>
                <h3>Faça login</h3>
                <label htmlFor="email">Email</label>
                <Input
                    onChange={e => setEmail(e.target.value)} 
                    id="email" 
                    type="email" 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />

                <label htmlFor="email">Senha</label>
                <Input
                    onChange={e => setPassword(e.target.value)} 
                    id="password" 
                    type="password" 
                    placeholder="No mínimo 6 caracteres"
                />
                
                <Button onClick={handleSignIn} text="Entrar"/>
                <Link to="/register">
                    <ButtonText text="Criar uma conta"/>
                </Link>
            </Content>
        </Container>
    )
}