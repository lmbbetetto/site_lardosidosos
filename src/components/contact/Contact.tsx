import "./styles.css"

import { GiPositionMarker } from 'react-icons/gi'
import { BsTelephone } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import imgMap from '../../assets/mapa.png'

type ContactType = {
    onSubmitContact: (e: any) => void
}

export function Contact({ onSubmitContact }: ContactType) {
    const form = useRef<any>();

    //Alterar Any
    const sendEmail = (e: any) => {
        e.preventDefault();

        //Tipar form.current
        emailjs.sendForm('emailACIPP', 'template_99qbpgb', form.current, 'EHQntXXmTW_cNvFQC')

        e.target.reset()
    };

    return (
        <>
            <div className="contato_header">
                <h1 className="nome_contato">Contato</h1>
                <h1 className="contato_linha"></h1>
            </div>

            <div className="container_contact contact__container">

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Nome completo' required />
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="phone" name="phone" placeholder='Telefone' required />
                    <textarea name="message" rows={7} placeholder='Mensagem' required></textarea>
                    <button type='submit' onClick={onSubmitContact} className='btn_doe'>Enviar</button>
                    <img className="mapaIMG" src={imgMap} alt="Mapa" />
                </form>

                <div className="contact__options block_contact">
                    <article className="contact__option">
                        <GiPositionMarker className='contact__option-icon' />
                        <h4>Endereço</h4>
                        <h5>Av. Manoel Antônio de Souza, 1806 - Barra Funda</h5>
                        <h5>Paraguaçu Paulista - SP</h5>
                    </article>

                    <article className="contact__option">
                        <BsTelephone className='contact__option-icon' />
                        <h4>Telefone</h4>
                        <h5>+55 18 3361-1814</h5>
                    </article>

                    <article className="contact__option">
                        <BsFacebook className='contact__option-icon' />
                        <h4>Facebook</h4>
                        <h5>Lar dos Idosos</h5>
                        <a href="https://www.facebook.com/lar.dosidosos.12" target='_blank'>Acesse</a>
                    </article>

                    <article className="contact__option">
                        <BsInstagram className='contact__option-icon' />
                        <h4>Instagram</h4>
                        <h5>Lar dos Idosos</h5>
                        <a href="https://www.instagram.com/lardosidososppta/" target='_blank'>Acesse</a>
                    </article>

                </div>
                {/* END OF CONTACT OPTIONS */}

            </div>
        </>
    )
}