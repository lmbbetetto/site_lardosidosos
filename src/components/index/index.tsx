import './styles.css'

import { Link } from 'react-router-dom'

function Index() {
    return (
        <>
            <div className='foto'>
                <p>“Acolher é encolher as distâncias, aquecer o frio e compartilhar gentilezas, que as nossas ações sejam sempre inspirações.”</p>
                <div className='botao'>
                    <Link to="/contato"><button className='btn-1 btn-index'>Contato</button></Link>
                    <Link to="/sobre"><button className='btn-2 btn-index'>Conheça o Lar dos Idosos</button></Link>
                </div>
            </div>

            <div className='container'>
                <div className='index_container'>
                    <div className='bloco'>
                        <h1>História</h1>
                        <p>A Associação São Vicente de Paulo de Paraguaçu “ Lar dos Idosos”, entidade filantrópica fundada em 1957, tem como estatutária prestar assistência social e proteção a idosos a partir  dos 60 anos...</p>
                        <Link to="/sobre"><button className='btn-bloco'>Conheça nossa história</button></Link>
                    </div>

                    <div className='bloco bloco_2'>
                        <h1>Como ajudar</h1>
                        <p>Descubra as diferentes maneiras de ajudar o Lar dos idosos!</p>
                        <Link to="/apoie"><button className='btn_doe_index'>Apoie</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Index