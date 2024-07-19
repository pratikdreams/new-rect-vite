import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Componentspage from './pages/Componentspage'
import Nav from './components/Nav'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <Nav />
       <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/c' element={<Componentspage/>} />
 
    </Routes>
   </BrowserRouter>
   <Footer />
    </div>
  )
}

