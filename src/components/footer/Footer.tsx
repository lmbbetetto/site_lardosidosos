import "./styles.css";
import logo from "../../assets/logo.png";

import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <>
      <div className="container_footer">
        <h1 className="logo_footer">Lar dos Idosos</h1>
        <div className="menu_footer">
          <Link to="/"><a>Início</a></Link>
          <Link to="/sobre"><a>Sobre</a></Link>
          <Link to="/transparencia"><a>Transparência</a></Link>
          <Link to="/contato"><a>Contato</a></Link>
        </div>

        <div className="footer-btn">
          <Link to="/apoie"><button className="btn_footer">Apoie</button></Link>
        </div>

        <div className='socials_1'>
          <a href="https://www.facebook.com/lar.dosidosos.12" target="_blank"><BsFacebook /></a>
          <a href="https://www.instagram.com/lardosidososppta/" target="_blank"><BsInstagram /></a>
        </div>

      </div>

      <div className="copy">
        <small>
          &copy; Lar dos Idosos | Todos os direitos reservados.<br></br>
        </small>
        <small>
          Desenvolvido por{" "}
          <a href="https://www.leonardobetetto.dev" target="_blank">
            Leonardo Betetto
          </a>
        </small>
      </div>
    </>
  );
}
