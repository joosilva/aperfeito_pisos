import "./Contato.scss";

export const Contato = () => {
    return (
        <div className="contato">
            <div className="fundo" />

            <h1 className="titulo bold">Entre em Contato</h1>
            <h1 className="subtitulo bold">e solicite um orçamento gratuitamente:</h1>


            <button className="botao-1">
                <a className="subtitulo regular" href="">WhatsApp</a>
                <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/whatsapp_redondo.png?raw=true" alt="" />
            </button>
            
            <button className="botao-2">
                <a className="subtitulo regular" href="mailto:contato@aperfeitopisos.com.br">Email</a>
                <img className="email" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/email.png?raw=true" alt="" />
            </button>

            <h1 className="descricao regular">Aturalmente nosso contato é feito inteiramente pelo WhatsApp. <br />
                Envie uma mensagem. Nossa equipe está pronta para te servir.</h1>
        </div>
    )
}