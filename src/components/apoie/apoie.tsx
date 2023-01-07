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
                        <p className="icon_apoie"><BsCashCoin /></p>
                        <strong>Pix</strong>
                        <p>44.545.689/0001-05</p>
                    </article>

                    <article className="block">
                        <p className="icon_apoie"><BsCreditCardFill /></p>
                        <strong>Conta bancária</strong>
                        <p>
                            Agencia: 0404<br />
                            Conta: 0010481-7<br />
                            Conta Corrente<br />
                            Associação São Vicente de Paulo de Paraguaçu Paulista
                        </p>
                    </article>

                    <article className="block">
                        <p className="icon_apoie"><RiHandHeartFill /></p>
                        <strong>Doações presenciais</strong>
                        <p>Avenida Manoel Antonio de Souza,1806, Barra Funda - Paraguaçu Paulista - SP</p>
                    </article>
                </div>
            </section>
        </>
    )
}