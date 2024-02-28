import "./Navbar.scss";

function Navbar() {

    return (
        <>
            <nav>
                <div className="logo">
                    <img src="../../assets/logo_nome_fundo_transparente.png" alt="Logo da apêrfeito." />
                </div>
                <ul className="navigation">
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>Nossos Serviços</li>
                    <li><a href="#"></a>Sobre Nós</li>
                    <li><a href="#"></a>Contato</li>
                    <li><a href="#"></a>Solicite um Orçamento</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;