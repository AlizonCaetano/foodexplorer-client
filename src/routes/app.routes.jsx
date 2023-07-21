import { Routes, Route } from 'react-router-dom'

import { DishDetails } from '../pages/DishDetails'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'

import { EditDish } from '../pages/EditDish'

export function AppRoutes(){
    
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<NewDish/>}/>
            <Route path="/dishes/:id" element={<DishDetails/>}/>
            <Route path="/dishes/edit/:id" element={<EditDish/>}/>
        </Routes>
    )
}
