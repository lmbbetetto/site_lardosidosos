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

            <div className="container_apoie">
                <div className="block">
                    <p className="icon_apoie"><BsCashCoin /></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>

                <div className="block">
                    <p className="icon_apoie"><BsCreditCardFill /></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>

                <div className="block">
                    <p className="icon_apoie"><RiHandHeartFill /></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>

            </div>
        </>
    )
}