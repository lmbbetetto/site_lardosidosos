import "./styles.css"

import { MdPictureAsPdf } from 'react-icons/md'
import { BsBookmarksFill } from 'react-icons/bs'

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
                        <h3 className='ata transparencia_h3'>Ata de eleiçao gestão - 2021/2022</h3>
                        <a href="" target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Relatório Fotografico | Relatório Anual de Atividades - 2021</h3>
                        <a href="" target='_blank' className="btn-transparencia">Fotos</a>
                        <a href="" target='_blank' className="btn-transparencia">Atividades</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 06/2022 TF 11/2022</h3>
                        <a href="" target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 07/2022 TF 12/2022</h3>
                        <a href="" target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 08/2022 TF 13/2022</h3>
                        <a href="" target='_blank' className="btn-transparencia">Abrir</a>
                    </article>

                    <article className='transparencia_item'>
                        <MdPictureAsPdf className='about__icon' />
                        <h3 className='transparencia_h3'>Proposta e Plano de Trabalho 08/2022 TF 13/2022</h3>
                        <a href="" target='_blank' className="btn-transparencia">Abrir</a>
                    </article>
                </div>
            </section>
        </>
    )
}