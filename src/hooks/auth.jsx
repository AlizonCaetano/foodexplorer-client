import { createContext, useContext, useEffect} from 'react'

export const AuthContext = createContext({})

import { useState } from 'react'

import { api } from '../services/api'

function AuthProvider({ children }) {
    const [ data, setData ] = useState({})
    

    async function signIn({ email, password }) {
        try {
            const res = await api.post('/sessions', { email, password })
            const { user, token } = res.data
            
            localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
            localStorage.setItem('@foodexplorer:token', token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({ user, token })
            
        } catch(err) {
            if(err.response){
                alert(err.response.data.message)
            }else{
                alert('Login failed, error: ' + err)
            }
        }

    }
    
    useEffect(() => {
        const user = localStorage.getItem('@foodexplorer:user')
        const token = localStorage.getItem('@foodexplorer:token')

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])

    function signOut(){
        localStorage.removeItem('@foodexplorer:user')
        localStorage.removeItem('@foodexplorer:token')
        
        setData({})
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }