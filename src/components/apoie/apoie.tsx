import "./styles.css"

import { BsCashCoin } from 'react-icons/bs'
import { BsCreditCardFill } from 'react-icons/bs'
import { RiHandHeartFill } from 'react-icons/ri'

export function Apoie() {
    return (
        <>
            <div className="trans_header">
                <h1 className="nome_trans">Apoie</h1>
                <h1 className="trans_linha"></h1>
            </div>

            <section className="container_apoie">
                <div className="apoie_column">
                    <article className="block">                     
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <p className="icon_apoie"><BsCashCoin /></p>
                    </article>

                    <article className="block">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <p className="icon_apoie"><BsCreditCardFill /></p>
                    </article>

                    <article className="block">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                            <p className="icon_apoie"><RiHandHeartFill /></p>
                    </article>
                </div>
            </section>
        </>
    )
}