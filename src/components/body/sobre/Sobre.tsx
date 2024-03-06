import "./Sobre.scss";

export const Sobre = () => {
    return (
        <div className="background-sobre">
            <div className="background-cor" />
            
            <h1 className="titulo bold">Sobre Nós</h1>
            <h6 className="descricao light">
                Somos uma empresa especializada em pisos e revestimentos com mais de 6 anos de mercado e centenas de clientes satsfeitos. <br />
                Nossa principal preocupação é com nosso bem mais precioso, você. Tornar realidade o seu sonho para sua reforma é o nosso objetivo. <br />
                Por isso, contamos com profissionais capacitados e especializados, oferecendo sempre o melhor do mercado para você.
            </h6>
            <h1 className="descricao bold">Nossos Parceiros:</h1>
            <div className="parceiros">
                <div className="linha-1">
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/eucafloor.png?raw=true" alt="Logo da eucafloor." />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/durafloor.png?raw=true" alt="Logo da durafloor." />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/tarkett.png?raw=true" alt="Logo da tarkett." />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/santaluzia.png?raw=true" alt="Logo da santa luzia." />
                </div>
                <div className="linha-2">
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/quartzolit.png?raw=true" alt="Logo da quartzolit." />
                    <img src="https://raw.githubusercontent.com/joosilva/aperfeito_pisos/e1ccecbcd862a6a2ba9a1faa846c5c165ca99a26/assets/vinilforte.svg" alt="Logo da vinilpisos." />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/madebene.png?raw=true" alt="Logo da madebene." />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/protec.png?raw=true" alt="Logo da protec." />
                </div>
            </div>
        </div>
    )
}