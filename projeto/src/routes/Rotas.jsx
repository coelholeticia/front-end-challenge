import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'
import Sobre from '../pages/Sobre/Sobre'
import Contato from '../pages/Contato/Contato'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Repositorios from '../pages/Apigit/Repositorios'


function Rotas(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='sobre' element={<Sobre />} />
                <Route path='contato' element={<Contato />} />
                <Route path='repositorios' element={<Repositorios />} />
            </Routes>
            <Footer />
        </BrowserRouter>

    )
}

export default Rotas