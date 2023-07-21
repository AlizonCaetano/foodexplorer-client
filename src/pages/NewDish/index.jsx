import { Container, Form } from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { TagItem } from '../../components/TagItem'

import { TbCurrencyReal } from 'react-icons/tb'
import { GrUpload } from 'react-icons/gr'
import { RxCaretLeft } from 'react-icons/rx'

import { api } from '../../services/api'

export function NewDish(){
    const [ loading, setLoading ] = useState(false)

    const navigate = useNavigate()
    
    const [ newIngredient, setNewIngredient] = useState('')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [image, setImage] = useState(null)

    function handleSetNewIngredient() {
        if ( newIngredient.length < 3 ) {
            return alert('Please insert a valid ingredient!')
        } else {
            setIngredients(prevState => [ ...prevState, newIngredient ])
            setNewIngredient('')
        }
    }

    function handleRemoveIngredient(itemDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== itemDeleted))
    }

    async function handleCreateDish() {
        if ( !image ) {
            return alert('Please, select a image!');
        }
        
        if ( !title ) {
            return alert('Plase, insert a title!');
        }

        if ( ingredients.length < 1 ) {
            return alert('Plase, insert a valid ingredient!');
        }

        if ( newIngredient ) {
            return alert('Plase, insert a ingredient!');
        }

        if ( !category ) {
            return alert('Plase, insert a category!');
        }

        if ( !price ) {
            return alert('Plase, insert a price!');
        }

        if ( !description ) {
            return alert('Plase, insert a description!');
        }

        setLoading(true);

        const formData = new FormData()
        formData.append('image', image)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('price', parseFloat(price).toFixed(2))

        ingredients.map(ingredient => (
            formData.append('ingredients', ingredient)
        ))

        await api
            .post('/dishes', formData)
            .then(alert('Dish created!'), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Error an ocurred when try create dish')
                }
            })

        setLoading(false) 
    }

    function handleBack(){
        navigate('/')
    }

    return(
        <Container>
            <Header/>
            <Form>
                <header>
                    <ButtonText onClick={handleBack} icon={RxCaretLeft} className="returnbtn" text="Voltar" />
                    <h2>Novo prato</h2>
                </header>

                <div className="details">
                    <div className="dishImage">
                        <p>Imagem do prato</p>
                        <label htmlFor="image">
                            <GrUpload size={24}/>
                            <span>Selecione imagem</span>
                        </label>
                        <Input 
                            onChange={e => setImage(e.target.files[0])}
                            type="file"
                            id="image" 
                            name="image"
                            accept="image/*" 
                        />
                    </div>
                    <div className="dish">
                        <p>Nome do prato</p>
                        <Input
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Ex.: Salada Caesar"
                            type="text"
                        />
                    </div>
                </div>

                <div className="dishCategory">
                    <p>Categoria</p>
                    <select
                        onChange={e => setCategory(e.target.value)}
                        id="category" 
                        defaultValue={'default'}
                        type="select"
                    >
                        <option value="default" disabled>Selecione a categoria</option>
                        <option value="dishes">Pratos</option>
                        <option value="drinks">Bebidas</option>
                        <option value="desserts">Sobremesas</option>
                    </select>
                </div>

                <div className="ingredients">
                    <p htmlFor="ingredients">Ingredientes</p>
                    <div className="tags">

                        <TagItem 
                            onClick={handleSetNewIngredient}
                            onChange={e => setNewIngredient(e.target.value)}
                            text={newIngredient}
                            isNew
                        />

                        {
                            ingredients.map((tag, index) => (
                                <TagItem  
                                    key={String(index)}
                                    text={tag}
                                    onClick={() => handleRemoveIngredient(tag)}
                                />
                            ))
                        }

                        
                        
                    </div>  
                </div>

                <div className="price">
                    <p>Preço</p>
                    <Input 
                        onChange={e => setPrice(e.target.value)}
                        id="price"
                        type="number"
                        step="0.01"
                        icon={TbCurrencyReal} 
                        placeholder="00,00"
                    />
                </div>

                <div className="description">
                    <p>Descrição</p>
                    <TextArea 
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    />
                </div>

                <Button 
                    className="save-button"
                    onClick={handleCreateDish}
                    disabled={loading} 
                    text={loading ? "Salvando alterações" : "Salvar alteração"} 
                />

            </Form>
            <Footer/>
        </Container>
    )
}