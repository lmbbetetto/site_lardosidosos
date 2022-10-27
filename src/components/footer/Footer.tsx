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
          <a>Sobre</a>
          <a>Transparência</a>
          <a>Contato</a>
        </div>

        <div className="footer-btn">
          <button className="btn_footer">Apoie</button>
        </div>

        <div className='socials_1'>
          <a href="" target="_blank"><BsFacebook /></a>
          <a href="" target="_blank"><BsInstagram /></a>
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
