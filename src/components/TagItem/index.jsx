import { Container } from './styles'

import { FiPlus, FiX } from 'react-icons/fi'

export function TagItem({isNew, text, onClick,...rest}){
    return(
        <Container {...rest} isNew={isNew}>
            <input 
                type="text"
                placeholder="Adicionar"
                value={text}
                readOnly={!isNew}
            />

            <button
                type="button"
                onClick={onClick}
                className={ isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus/> : <FiX/>}
            </button>
        </Container>
    )
}