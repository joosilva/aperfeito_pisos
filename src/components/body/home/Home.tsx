import "./Home.scss";

export const Home = () => {
    return (
        <div className="background">
            <div className="posicionamento-logo">
                <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/nome_marca_fundo_transparente.png?raw=true" alt="Logo da apêrfeito" className="logo" />
            </div>

            <div className="posicionamento-foto">
                <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/gilvan_transparente.png?raw=true"
                    alt="Engenheiro, construtor com capacete de obra e camiseta preta e braços abertos com um sorriso no rosto."
                    className="foto" />

                <div className="posicionamento-texto">
                    <h1 className="texto bold">PISOS</h1>
                </div>
            </div>

        </div>
    )
}