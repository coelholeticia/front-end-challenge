import linkedin from '../../assets/LinkedinLogo.png'
import github from '../../assets/GithubLogo.png'
import'../Footer/footer.css'

function Footer(){
    return(
        <div className="roda-pe">
            <div className='contato'>
                <p className='tel'>Telefone: (21) 9 6923 - 4511</p>
                <p className='email'>E- mail: coelho.letticia@gmail.com</p>
            </div>
            <ul className="icones">
                <a className="icone-link" href="https://www.linkedin.com/in/coelholetticia/" target="_blank">
                    <img src={linkedin} alt='link do linkdin'/>
                </a>
                <a className="icone-link" href="https://github.com/coelholeticia" target="_blank">
                    <img src={github} alt='link do github'/>
                </a>
            </ul>
        </div>
    )
}

export default Footer