import { Container } from './styles'

export function TextArea({text, ...rest}){
    return(
        <Container resize='' {...rest}>
            {text}
        </Container>
    )
}