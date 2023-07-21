import { FiMenu } from 'react-icons/fi'
import { RiCloseFill } from 'react-icons/ri'
import { TfiReceipt } from 'react-icons/tfi'
import { RiSearchLine } from 'react-icons/ri'
import { RxExit } from 'react-icons/rx'

import { Container, Logout, MenuMobile, Receipt } from './styles'

import { Brand } from '../Brand'
import { BrandAdmin } from '../BrandAdmin'

import { Link } from 'react-router-dom'

import { Input } from '../Input'

import { useAuth } from '../../hooks/auth'

export function Header({search}){
    const handleMenuMobile = ()=>{
        document.getElementById('menu-closed').classList.toggle('active')
        document.getElementById('menu-opened').classList.toggle('active')
    }

    const { signOut, user } = useAuth()

    return(
        <Container>
            <MenuMobile>
                <div onClick={ handleMenuMobile } id="menu-closed" className="active">
                    <FiMenu  
                    size={24}
                    />
                </div> 

                <div id="menu-opened">
                    <span 
                    onClick={handleMenuMobile}
                    >
                    <RiCloseFill size={24}/>
                    Menu
                    </span>
                   
                    <div className="menu-content">
                        <div className="searchInput">
                            <Input onChange={e => { search(e.target.value) }} placeholder="Pesquise seus pratos"/>
                            <RiSearchLine onClick={handleMenuMobile}/>
                        </div>

                        {
                            user.isAdmin ?
                            <Link to="/new">
                                <span> Novo Prato </span>
                            </Link> 
                            : 
                            null 
                        }

                        <a>
                            <span onClick={signOut} className="exit">
                                Sair
                                <RxExit size={32}/>
                            </span>
                        </a>
                    </div>
                </div>
            </MenuMobile>

            { user.isAdmin ? <BrandAdmin/> : <Brand/> }

            <div className="searchInput">
                <Input 
                    onChange={e => { search(e.target.value) }}
                    icon={ RiSearchLine } 
                    placeholder="Busque por pratos ou ingredientes"
                />
            </div>

            { user.isAdmin ?
                <Link to="/new">
                    <Receipt className="receiptAdmin">
                        <span> Novo Prato </span>
                    </Receipt> 
                </Link>
                :
                <Receipt>
                    <TfiReceipt size={24}/>
                    <span>Meu pedido</span>
                    <span>0</span>
                </Receipt> 
            }
            
            <Logout onClick={signOut}>
                <RxExit size={32}/>
            </Logout>
        </Container>
    )
}