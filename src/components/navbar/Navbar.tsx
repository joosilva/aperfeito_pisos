import "./Navbar.scss";

import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="navbar">
                    <a href="#home">
                        <img className="logo" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/logo_nome_fundo_transparente.png?raw=true" alt="Logo da apêfeito" />
                    </a>
                    <div className={menuOpen ? "menuOpen" : "navigation-cel"}>
                        <ul className="subtitulo regular">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#servicos">Serviços</a>
                            </li>
                            <li>
                                <a href="#sobre">Sobre Nós</a>
                            </li>
                            <li>
                                <a href="#contato">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className={!menuOpen ? "mostrarIcone" : "ocultarIcone"}
                        onClick={() => { setMenuOpen(!menuOpen) }}>
                        <img className="iconeMenu" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/icone_menu.png?raw=true" alt="Ícone para abrir o menu" />
                    </div>

                    <div className={menuOpen ? "mostrarIcone" : "ocultarIcone"}
                        onClick={() => { setMenuOpen(!menuOpen) }}>
                        <img className="iconeFecharMenu" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/icone_fechar_menu.png?raw=true" alt="Ícone para fechar o menu" />
                    </div>

                    <ul className="navigation subtitulo bold">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#servicos">Serviços</a>
                        </li>
                        <li>
                            <a href="#sobre">Sobre Nós</a>
                        </li>
                        <li>
                            <a href="#contato">Contato</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;