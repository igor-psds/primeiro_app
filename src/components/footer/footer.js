import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import Logo from '../../assets/logo_batman_projeto3.png';

function Footer(){
    return(
        <footer>
            <img id="logo" src={Logo}/>
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por: Igor Pova</span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{textDecoration: 'none'}} to={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/contato'}>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/fotos'}>
                        <li>Fotos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to={'/comentarios'}>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;