import { Container } from './styles'

export function Button({text, icon: Icon,...rest}){
    return(
        <Container {...rest} type="button">
            {Icon && <Icon size={20}/>}
            {text}
        </Container>
    )
}