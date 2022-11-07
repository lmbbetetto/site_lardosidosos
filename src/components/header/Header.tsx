import './styles.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { AnimatedHumburguerButton } from './animatedHamburguerButton'

import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function Header() {

  const [active, setActive] = useState(false)

  return (
    <div className='main-container'>
      <header className='mobile'>
        <div className='hamburguer-container'>
          <button
            className='hamburguer'
            onClick={() => {
              setActive(!active)
            }}
          >
            <AnimatedHumburguerButton active={active} />
          </button>
        </div>
        <div className={active ? "activeSidenav" : "sidenav"}>
          <div className="container_mobile container-header">
            <div className="mobile_1">
              <Link to="/"><a>Início</a></Link>
              <Link to="/sobre"><a>Sobre</a></Link>
              <Link to="/transparencia"><a>Transparência</a></Link>
              <div className='linha'>
                <Link to="/contato">Contato</Link>
              </div>
              <div className='socials'>
                <a href="https://www.facebook.com/lar.dosidosos.12" target="_blank"><BsFacebook /></a>
                <a href="https://www.instagram.com/lardosidososppta/" target="_blank"><BsInstagram /></a>
              </div>
            </div>
          </div>
        </div>
        <Link to="/"><img src={logo} alt="Lar dos Idosos" className="logo__casa" /></Link>
        <Link to="/apoie"><button className='btn_doe1'>Apoie</button></Link>
      </header>
    </div>
  )
}

export default Header