import logo from '../../assets/Logotipo.png'
import { Link } from 'react-router-dom'
import './header.css'

function Header(){
    return(
        <div className='header'>
            <img className='logo' src={logo} alt='Logotipo' />
            <ul className='menu'>
                <li className='item-menu'>
                    <Link to="/" className='link'>Inicio</Link>
                </li>
                <li className='item-menu'>
                    <Link to="/sobre" className='link'>Sobre</Link>
                </li>
                <li className='item-menu'>
                    <Link to="/contato" className='link'>Contato</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header