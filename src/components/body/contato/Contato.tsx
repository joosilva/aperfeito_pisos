import "./Contato.scss";

export const Contato = () => {
    return (
        <div className="contato">
            <div className="fundo" />

            <h1 className="titulo bold">Entre em Contato</h1>
            <h1 className="subtitulo bold">e solicite um orçamento gratuitamente:</h1>


            <button className="botao-1">
                <a className="subtitulo regular" target="_blank" href="https://wa.me/5511937370612?text=Ol%C3%A1.+Vim+pelo+site+e+gostaria+de+informa%C3%A7%C3%B5es%2Fsolicitar+um+or%C3%A7amento.">WhatsApp</a>
                <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/whatsapp_redondo.png?raw=true" alt="" />
            </button>

            <button className="botao-2">
                <a className="subtitulo regular" target="_blank" href="mailto:contato@aperfeitopisos.com.br?subject=Informa%C3%A7%C3%B5es/Or%C3%A7amento&body=Ol%C3%A1.+Vim+pelo+site+e+gostaria+de+informa%C3%A7%C3%B5es/solicitar+um+or%C3%A7amento.">Email</a>
                <img className="email" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/email.png?raw=true" alt="" />
            </button>

            <h1 className="redes-texto subtitulo bold">
                Nos siga nas redes sociais:
            </h1>

            <div className="redes">
                <a target="_blank" href="https://www.facebook.com/aperfeitopisos?mibextid=sCpJLy">
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/facebook.png?raw=true" alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/aperfeitopisos/">
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/insta_transparente.png?raw=true" alt="" />
                </a>
            </div>
        </div>
    )
}