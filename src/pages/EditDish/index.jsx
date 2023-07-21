import { Container, Form, Image } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { TagItem } from '../../components/TagItem'
import imgDefault from '../../assets/image_default.png'

import { TbCurrencyReal } from 'react-icons/tb'
import { GrUpload } from 'react-icons/gr'
import { RxCaretLeft } from 'react-icons/rx'

import { useNavigate, useParams  } from 'react-router-dom'

import { useState, useEffect } from 'react'

import { api } from '../../services/api'

export function EditDish() {
    const [ loading, setLoading ] = useState(false)
    const [ loadingDelete, setLoadingDelete ] = useState(false)

    const params = useParams() 
    const navigate = useNavigate()

    const [ newIngredient, setNewIngredient] = useState('')
    const [ ingredients, setIngredients ] = useState([])

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ price, setPrice ] = useState('')
        
    const [ data, setData ] = useState(null)

    useEffect(() => {
        async function fetchDish() {
            const dishInfo = await api.get(`/dishes/${params.id}`)
            setData(dishInfo.data)

            const { title, description, category, price, ingredients } = dishInfo.data

            setTitle(title)
            setDescription(description)
            setCategory(category)
            setPrice(price)
            setIngredients(ingredients.map(ingredient => ingredient.name))
        }
    
        fetchDish()
    }, [])

    
    const imageURL = data && `${data.image == 'null' ? imgDefault : api.defaults.baseURL + '/files/' + data.image}`
   
    const [ imagePreview, setImagePreview ] = useState()
    const [ imageFile, setImageFile] = useState(null)

    function handleChangeImage(event) {
        const file = event.target.files[0]
        setImageFile(file)

        const imagePreview = URL.createObjectURL(file)
        setImagePreview(imagePreview)
    }

    function handleSetNewIngredient() {
        if ( newIngredient.length < 3 ) {
            return alert('Please insert a valid ingredient!')
        } else {
            setIngredients(prevState => [ ...prevState, newIngredient ])
            setNewIngredient('')
        }
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleUpdateDish() {
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

        setLoading(true)

        const formData = new FormData()
        
        formData.append('image', imageFile)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('price', parseFloat(price).toFixed(2))

        ingredients.map(ingredient => {
            formData.append('ingredients', ingredient)
        })

        await api
            .put(`/dishes/${params.id}`, formData)
            .then(alert('Dish updated!'), navigate(`/dishes/${params.id}`))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Error an ocurred when try create dish')
                }
            })

        setLoading(false) 
    }
   
    async function handleRemoveDish() {
        setLoadingDelete(true)
        const isConfirm = confirm('Are you sure delete this item?')
    
        if(isConfirm) {
            await api.delete(`/dishes/${params.id}`)
            .then(() => {
                alert('Item deleted')
                navigate('/')
                setLoadingDelete(false)
            })
        } else {
            return
        }
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
                    <h2>Editar prato</h2>
                </header>

                <div className="dishImage">
                    <p>Imagem do prato</p>
                    <Image>
                        <img 
                            src={ imagePreview ? imagePreview : imageURL }
                            alt="Foto do prato" 
                        />
                    
                        <label htmlFor="image">
                            <Input 
                                icon={GrUpload}
                                onChange={handleChangeImage}
                                type="file"
                                id="image" 
                                name="image"
                                accept="image/*" 
                            />
                        </label>
                    </Image>
                </div>

                <div className="details">
                    <div className="dish">
                        <p>Nome do prato</p>
                        <Input
                            onChange={e => setTitle(e.target.value)}
                            value={title}
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
                    value={category}
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
                    value={Number(price).toFixed(2)}
                    icon={TbCurrencyReal} 
                    placeholder="00,00"
                    />
                </div>

                <div className="description">
                    <p>Descrição</p>
                    <TextArea 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
                </div>

                <Button 
                    onClick={handleUpdateDish}
                    disabled={loading} 
                    text={loading ? "Salvando alterações" : "Salvar alteração"} 
                />

                <Button 
                    onClick={handleRemoveDish}
                    disabled={loadingDelete} 
                    text={loadingDelete ? "Excluindo prato" : "Excluir prato"} 
                    className="deleteButton"
                />
                

            </Form>
            <Footer/>
        </Container>
    )
}