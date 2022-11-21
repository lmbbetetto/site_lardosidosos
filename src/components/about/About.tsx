import "./styles.css"

export function About() {
    return (
        <>
            <div className="sobre_header">
                <h1 className="nome_sobre">Quem somos nós?</h1>
                <h1 className="sobre_linha"></h1>
            </div>

            <div className="about-container">
                <div className="about-maior">
                    <h1>História</h1>
                    <p>A Associação São Vicente de Paulo de Paraguaçu “ Lar dos Idosos” ,entidade filantrópica fundada em 1957, tem como estatutária prestar assistência social e proteção a idosos a partir  dos 60 anos, não fazendo distinção de sexo, raça,  condição social, credo ou ideologia .A instituição  oferece Serviço de Proteção Social Especial para idosos, ofertando acolhimento institucional com característica domiciliar ,acolhe idosos com diferentes necessidades e graus de dependência que tiveram suas limitações agravadas por violações de direitos, tais como: abandono, isolamento, maus tratos e falta de cuidados adequados por parte dos responsáveis. O serviço tem por finalidade assegurar a convivência com familiares, amigos e pessoas de referência de forma continua, bem como acesso as atividades culturais, educativas e de lazer na comunidade, assegurando atendimento de qualidade, personalizado com três idosos por quarto. Em um  espaço físico de 3.568,64 m², em bom estado de conservação, divididos da seguinte forma: sala da administração, sala de fisioterapia, capela, sala de lazer, vestiário de funcionários, rouparia, lavanderia, banheiro social, farmácia, refeitório, sala de TV, cozinha, dispensa, almoxarifado, 18 (dezoito) quartos com três camas em cada um, 09 banheiros e um pátio. A capacidade de atendimento é de 54 idosos. A equipe é composta por: 01 Assistente Social, 1 Auxiliar Administrativo, 01 Enfermeiro, 05 Técnicos de Enfermagem, 01 Fisioterapeuta, 02 Cozinheiras, 10 Serviços Gerais.</p>
                </div>

                <div className="columns-container">
                    <div className="coluna coluna2">
                        <h1>Missão</h1>
                        <p className="pcima">Acolher idosos vítimas de violência, abandono e maus tratos o no seu convívio familiar ou na sociedade, ofertando qualidade de vida, protegendo e preservando seus direitos.</p>

                        <h1>Visão</h1>
                        <p className="pcima pbaixo">Ser referência no acolhimento institucional a idosos, prestando serviço humanizado aos acolhidos, contribuindo para a efetivação dos direitos, estimulando o desenvolvimento do protagonismo e da capacidade para realização das atividades de vida diária e fortalecimento dos vínculos familiares.</p>

                    </div>
                    <div className="coluna coluna1">
                        <h1>Valores</h1>
                        <div className="pvalores">
                            <p>- Preservação dos vínculos familiares;</p>
                            <p>- Habilitação e reabilitação do idosos e seus familiares ao convívio social;</p>
                            <p>- Promover acesso aos serviços setoriais, em especial das políticas públicas de cultura, esporte e lazer, contribuindo para o usufruto dos direitos socias;</p>
                            <p>- Assegurar o direito ao convívio social e comunitário, minimizando seu isolamento social;</p>
                            <p>- Promover acesso a serviços socioassistenciais, fortalecendo a rede de proteção social;</p>
                            <p>- Promover o bem-estar e a qualidade de vida dos idosos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}