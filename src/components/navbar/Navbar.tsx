import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav>
                <div className="navbar">
                    <Link to="home" smooth={true} duration={500}>
                        <img className="logo" src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/logo_nome_fundo_transparente.png?raw=true" alt="Logo da apêfeito" />
                    </Link>
                    <div className={menuOpen ? "menuOpen" : "navigation-cel"}>
                        <ul className="subtitulo regular">
                            <li>
                                <Link to="home" smooth={true} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
                            </li>
                            <li>
                                <Link to="sobre" smooth={true} duration={500}>Sobre Nós</Link>
                            </li>
                            <li>
                                <Link to="contato" smooth={true} duration={500}>Contato</Link>
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

                    <ul className="navigation subtitutlo bold">
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="servicos" smooth={true} duration={500}>Serviços</Link>
                        </li>
                        <li>
                            <Link to="sobre" smooth={true} duration={500}>Sobre Nós</Link>
                        </li>
                        <li>
                            <Link to="contato" smooth={true} duration={500}>Contato</Link>
                        </li>
                    </ul>

                    <a className="whats" target="_blank" href="https://wa.me/5511937370612?text=Ol%C3%A1.+Vim+pelo+site+e+gostaria+de+informa%C3%A7%C3%B5es%2Fsolicitar+um+or%C3%A7amento.">
                        <div className="telefone">
                            <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/whatsapp_redondo.png?raw=true" alt="" />
                            <h2 className="subtitulo bold">(11) 93737-0612</h2>
                        </div>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;