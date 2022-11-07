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
                    <div className='bloco'></div>

                    <div className='bloco bloco_2'></div>
                </div>
            </div>

        </>
    )
}

export default Index