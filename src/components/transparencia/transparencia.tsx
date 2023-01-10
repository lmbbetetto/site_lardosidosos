import "./styles.css"

import { MdPictureAsPdf } from 'react-icons/md'
import { BsBookmarksFill } from 'react-icons/bs'

import ata2022 from '../../assets/transparencia_item/Ata-2022.pdf'
import comprovante from '../../assets/transparencia_item/Comprovante-de-Inscrição-e-de-Situação-Cadastral.pdf'
import cmas from '../../assets/transparencia_item/CMAS-2021.pdf'
import crce from '../../assets/transparencia_item/CRCE.pdf'
import estatuto from '../../assets/transparencia_item/Estatuto-Social.pdf'
import portarias from '../../assets/transparencia_item/PORTARIAS-MC-CEBAS-11.10.2022.pdf'

export function Transparencia() {
    return (
        <>
            <div className="trans_header">
                <h1 className="nome_trans">Transparencia</h1>
                <h1 className="trans_linha"></h1>
            </div>

            <section>
                <div className='container sinconvinho'>
                    <article className='transparencia_item'>
                        <BsBookmarksFill className='about__icon' />
                        <h3 className='transparencia_h3'>SICONVINHO - Sistema de Parcerias entre Prefeituras e Entidades</h3>
                        <a href='https://www.lei13019.com.br/inicial.php?orgao_id=65&orgao_nome=Munic%C3%ADpio%20da%20Est%C3%A2ncia%20Tur%C3%ADstica%20de%20Paragua%C3%A7u%20Paulista&orgao_estado=SP&orgao_cidade=Paragua%C3%A7u%20Paulista&orgao_logomarca=jpg&pasta=sp/paraguacupaulista/' target='_blank' className="btn-transparencia">Acesso ao Sistema</a>
                    </article>
                </div>

                <div className="container transparencia__container">
                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='ata transparencia_h3'>Ata de eleiçao - /2022</h3>
                        <a href={ata2022} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Estatuto</h3>
                        <a href={estatuto} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Comprovante de Inscrição e Situação Cadastral</h3>
                        <a href={comprovante} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Conselho Municipal de Assistencia Social</h3>
                        <a href={cmas} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Certificado de Regularidade Cadastral de Entidades</h3>
                        <a href={crce} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Portarias MC Cebas - 2022</h3>
                        <a href={portarias} target='_blank' className="btn-transparencia">Abrir</a>
                    </article>
                </div>
            </section>
        </>
    )
}