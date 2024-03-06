import { useEffect, useRef, useState } from "react";
import "./Servicos.scss";

export const Servicos = () => {
    const elementoRef = useRef<HTMLDivElement>(null);
    const [elementoVisivel, setElementoVisivel] = useState<boolean>(false);
    const [cardAberto, setCardAberto] = useState<number | null>(null); // Alterado: armazena o índice da imagem clicada

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setElementoVisivel(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        if (elementoRef.current) {
            observer.observe(elementoRef.current);
        }

        return () => {
            if (elementoRef.current) {
                observer.unobserve(elementoRef.current);
            }
        };
    }, []);

    const handleAbrirCard = (indice: number) => { // Alterado: recebe o índice da imagem clicada
        setCardAberto(indice); // Alterado: armazena o índice da imagem clicada
    };

    const handleFecharCard = () => {
        setCardAberto(null); // Alterado: fecha o card ao clicar no "X"
    };

    const handleFecharCardFora = (event: MouseEvent) => {
        if (elementoRef.current && !elementoRef.current.contains(event.target as Node)) {
            setCardAberto(null); // Alterado: fecha o card ao clicar fora do card
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleFecharCardFora);
        return () => {
            document.removeEventListener("mousedown", handleFecharCardFora);
        };
    }, []);

    return (
        <div className="servicos">
            <h1 className="titulo extra-bold">Nossos Serviços:</h1>

            <div className="background-servicos">

                <div ref={elementoRef} className={`fotos ${elementoVisivel ? 'animado' : ''}`}>
                    {['vinilico', 'laminado', 'boieserie', 'rodape'].map((servico, index) => ( // Alterado: adicionado um array de serviços para mapear
                        <img
                            key={index}
                            onClick={() => handleAbrirCard(index)} // Alterado: passa o índice da imagem clicada para o manipulador de abertura de card
                            src={`https://github.com/joosilva/aperfeito_pisos/blob/main/assets/${servico}.png?raw=true`} // Alterado: usa o índice para definir a imagem
                            alt={`Instalação de piso ${servico}`} // Alterado: usa o índice para definir o texto alternativo
                            className={`foto-${index + 1}`} // Alterado: adiciona o índice para a classe da imagem
                        />
                    ))}
                    {cardAberto !== null && ( // Alterado: exibe apenas o card correspondente à imagem clicada
                        <div className={`card-${cardAberto === 0 ? 'vinilico' : cardAberto === 1 ? 'laminado' : cardAberto === 2 ? 'boieserie' : 'rodape'}`}>
                            <button onClick={handleFecharCard} className="fechar-card">X</button>
                            <p>Conteúdo do Card {cardAberto === 0 ? 'Vinílico' : cardAberto === 1 ? 'Laminado' : cardAberto === 2 ? 'Boieserie' : 'Rodapé'}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
