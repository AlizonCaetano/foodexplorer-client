import { Container } from './styles'

export function ButtonText({text, icon: Icon, ...rest}){
    return(
        <Container {...rest} type="button">
            {Icon && <Icon size={42} />}
            {text}
        </Container>
    )
}