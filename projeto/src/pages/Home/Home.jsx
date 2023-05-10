import'./home.css'
import { Link } from 'react-router-dom'
import projeto1 from '../../assets/projeto1.png'
import projeto2 from '../../assets/projeto2.png'
import projeto3 from '../../assets/Capa.png'
import Repositorios from '../Apigit/Repositorios'

function Home(){
    return(
        <>
            <div className="intro">
                <h1 className="titulo-intro">
                    Olá eu sou,
                    Letícia Coelho 👋
                </h1>
                <p className="p-intro">
                    Desenvolvedora Front-end que busca criar interfaces criativas e impactantes.
                </p>
            </div>
                <div className='link-sobre'>
                    <Link to="/sobre" className='link'>Quer saber mais →</Link>
                </div>
           
            <div className='container-portifolio'>
                <ul className='container-projetos'>
                    <li className='item-projeto'>
                        <h2 className='titulo-projetos'>Projeto 01</h2>
                        <p className='p-projetos'>
                            Projeto Inspirart foi desenvolvido para ajudar mulheres atesãs a encontrar 
                            compradores. 
                            Tecnologias usadas fora: ReactJs, Javascript, ApiRest.
                            O layout criado no figma. 
                        </p>
                        <img className='img-projeto' src={projeto1} alt='projeto inspirat' />
                        <a className='link-projeto' href='https://inspirarte.netlify.app/' target='_blank'> Acesse →</a>
                    </li> 
                    <li className='item-projeto'>
                        <h2 className='titulo-projetos'>Projeto 02</h2>
                        <p className='p-projetos'>
                            Projeto portfifolio, aqui você encontra um pouco sobre e meus trabalhos.
                            Tecnologias usadas fora: ReactJs, Javascript, ApiRest.
                            O layout criado no figma. 
                        </p>
                        <img className='img-projeto' src={projeto2} alt='projeto portifolio' />
                        <a className='link-projeto' href='https://leticiacoelho.netlify.app/' target='_blank'> Acesse →</a>
                    </li> 
                    <li className='item-projeto'>
                        <h2 className='titulo-projetos'>Projeto 03</h2>
                        <p className='p-projetos'>
                            Projeto Adoções de animais, projeto desenvolvimento UI, criação de telas no figma. 
                        </p>
                        <img className='img-projeto' src={projeto3} alt='projeto figma' />
                        <a className='link-projeto' href='https://www.behance.net/gallery/169183195/MI-AU' target='_blank'> Acesse →</a>
                    </li> 
                </ul>
            </div>
            <div className='repositorios'>
                < Repositorios/>
            </div>

            
        </>
    )
}

export default Home