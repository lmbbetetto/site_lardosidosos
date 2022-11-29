import './styles.css'

import { Link } from 'react-router-dom'

function Index() {
    return (
        <>
            <div className='foto'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className='botao'>
                    <Link to="/contato"><button className='btn-1 btn-index'>Contato</button></Link>
                    <Link to="/sobre"><button className='btn-2 btn-index'>Conheça o Lar dos Idosos</button></Link>
                </div>
            </div>

            <div className='container'>
                <div className='depoimento'></div>

                <div className='index_container'>
                    <div className='bloco'>
                        <h1>História</h1>
                        <p>A Associação São Vicente de Paulo de Paraguaçu “ Lar dos Idosos” ,entidade filantrópica fundada em 1957, tem como estatutária prestar assistência social e proteção a idosos a partir  dos 60 anos...</p>
                        <Link to="/sobre"><button className='btn-bloco'>Conheça nossa história</button></Link>
                    </div>

                    <div className='bloco bloco_2'>
                        <h1>Ajude-nos!</h1>
                        <p>Descubra as diferentes maneiras de ajudar o Lar dos idosos!</p>
                        <Link to="/apoie"><button className='btn_doe_index'>Apoie</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Index