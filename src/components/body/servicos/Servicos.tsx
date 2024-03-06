import { useEffect, useRef, useState } from "react";
import "./Servicos.scss";

export const Servicos = () => {
    const elementoRef = useRef<HTMLDivElement>(null);
    const [elementoVisivel, setElementoVisivel] = useState<boolean>(false);
    const [cardAberto, setCardAberto] = useState<number | null>(null);

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

    const handleAbrirCard = (indice: number) => {
        setCardAberto(indice);
    };

    const handleFecharCard = () => {
        setCardAberto(null);
    };

    const handleFecharCardFora = (event: MouseEvent) => {
        if (elementoRef.current && !elementoRef.current.contains(event.target as Node)) {
            setCardAberto(null);
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
                    {['vinilico', 'laminado', 'boieserie', 'rodape'].map((servico, index) => (
                        <img
                            key={index}
                            onClick={() => handleAbrirCard(index)}
                            src={`https://github.com/joosilva/aperfeito_pisos/blob/main/assets/${servico}.png?raw=true`}
                            alt={`Instalação de piso ${servico}`}
                            className={`foto-${index + 1}`}
                        />
                    ))}
                </div>
            </div>
            {cardAberto !== null && (
                <div className="card-overlay">
                    <div className={`card-${cardAberto === 0 ? 'vinilico' : cardAberto === 1 ? 'laminado' : cardAberto === 2 ? 'boieserie' : 'rodape'}`}>
                        <button onClick={handleFecharCard} className="fechar-card descricao extra-bold">X</button>
                        
                        <h1 className="titulo-card titulo bold">{cardAberto === 0 ? 'Piso Vinílico' : cardAberto === 1 ? 'Piso Laminado' : cardAberto === 2 ? 'Boieserie' : 'Rodapé em Poliestileno'}</h1>
                        
                        <div className="card-foto">
                            <div className="fotos-desktop">
                            <img className="foto-desktop" src={cardAberto === 0 ? "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/card_vinilico.png?raw=true"
                                : cardAberto === 1 ? "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/card_laminado.png?raw=true"
                                    : cardAberto === 2 ? "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/card_boieserie.png?raw=true"
                                        : "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/card_rodape.png?raw=true"}
                            />
                            </div>
                            <p className="descricao regular">
                                {cardAberto === 0 ? 'O "Piso Vinílico" é ideal para interiores agregando elegancia e praticidade ao seu lar ou ambiente de trabalho. Sua composição é de PVC, o que permite a fácil limpeza do piso. Este revestimento possui uma fácil e rápida instalação por colagem, deixando o ambiente muito bem nivelado e trazendo mais praticidade e menos dor de cabeça na hora de realizar sua reforma.'
                                    : cardAberto === 1 ? 'O "Piso Laminado" é ideal para interiores agregando elegancia e praticidade ao seu lar ou ambiente de trabalho. Sua composição é de HDF, o que permite a fácil limpeza do piso. Este revestimento possui uma fácil e rápida instalação por encaixe, trazendo muito mais praticidade e menos dor de cabeça na hora de realizar sua reforma.'
                                        : cardAberto === 2 ? 'A "Boieserie" é uma peça que traz charme e classe a qualquer ambiente, sendo possível criar os mais diferentes tipos de texturas e molduras para as paredes ou teto do seu lar. Não se preocupe com a cor, pois este material pode receber tinta e você pode escolher a cor que desejar para a sua textura. Com certeza uma Boiserie traz muita leveza e aconchego para qualquer ambiente.'
                                            : ' O "Rodapé em Poliestileno" é uma peça de muito versátil e proporciona um acabamento fino para a sua reforma. Este acabamento permite que você escolha a cor que mais combina e se adequa para cada ambiente e possui diferentes frisos, trazendo a sofisticação que você merece no seu lar ou ambiente de trabalho. Suas frestas internas possibilitam a passagem de rede elétrica, tornando possível dar vida ao seu projeto mais ousado, como colocar uma iluminação no rodapé, por exemplo.'}
                            </p>
                        </div>

                        <p className="descricao regular">
                            {cardAberto === 0 ? 'O "Piso Vinílico" é ideal para interiores agregando elegancia e praticidade ao seu lar ou ambiente de trabalho. Sua composição é de PVC, o que permite a fácil limpeza do piso. Este revestimento possui uma fácil e rápida instalação por colagem, deixando o ambiente muito bem nivelado e trazendo mais praticidade e menos dor de cabeça na hora de realizar sua reforma.'
                                : cardAberto === 1 ? 'O "Piso Laminado" é ideal para interiores agregando elegancia e praticidade ao seu lar ou ambiente de trabalho. Sua composição é de HDF, o que permite a fácil limpeza do piso. Este revestimento possui uma fácil e rápida instalação por encaixe, trazendo muito mais praticidade e menos dor de cabeça na hora de realizar sua reforma.'
                                    : cardAberto === 2 ? 'A "Boieserie" é uma peça que traz charme e classe a qualquer ambiente, sendo possível criar os mais diferentes tipos de texturas e molduras para as paredes ou teto do seu lar. Não se preocupe com a cor, pois este material pode receber tinta e você pode escolher a cor que desejar para a sua textura. Com certeza uma Boiserie traz muita leveza e aconchego para qualquer ambiente.'
                                        : ' O "Rodapé em Poliestileno" é uma peça de muito versátil e proporciona um acabamento fino para a sua reforma. Este acabamento permite que você escolha a cor que mais combina e se adequa para cada ambiente e possui diferentes frisos, trazendo a sofisticação que você merece no seu lar ou ambiente de trabalho. Suas frestas internas possibilitam a passagem de rede elétrica, tornando possível dar vida ao seu projeto mais ousado, como colocar uma iluminação no rodapé, por exemplo.'}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}