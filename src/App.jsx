import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import  Loginpage from './pages/Loginpage'
import Componentspage from './pages/Componentspage'
import Contactpage from './pages/Contactpage'
import Pricingpage from './pages/Pricingpage'
import Blogpage from './pages/Blogpage'

export default function App() {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/l' element={<Loginpage/>} />
      <Route path='/c' element={<Componentspage/>} />
      <Route path='/Contactpage' element={<Contactpage/>} />
      <Route path='/e' element={<Pricingpage/>} />
      <Route path='/Blogpage' element={<Blogpage/>} />
    </Routes>
   </BrowserRouter>
  
    </div>
  )
}

