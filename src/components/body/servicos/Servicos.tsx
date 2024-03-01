import { useEffect, useRef, useState } from "react";

import "./Servicos.scss";

export const Servicos = () => {
    const elementoRef = useRef<HTMLDivElement>(null);
    const [elementoVisivel, setElementoVisivel] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setElementoVisivel(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        if (elementoRef.current) {
            observer.observe(elementoRef.current);
        }

        return () => {
            if (elementoRef.current) {
                observer.unobserve(elementoRef.current);
            }
        };
    }, []);

    return (
        <div className="servicos">
            <h1 className="titulo extra-bold">Nossos Serviços:</h1>

            <div className="background-servicos">

                <div ref={elementoRef} className={ `fotos ${ elementoVisivel ? 'animado' : '' }` }>
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/piso_vinilico.png?raw=true"
                        alt="Instalação de piso viniluco com textura de madeira escura para casas e apartamentos." className="foto-1" />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/piso_laminado.png?raw=true"
                        alt="Instalação de piso laminado com textura de madeira clara para casas e apartamentos." className="foto-2" />
                    <img src="https://github.com/joosilva/aperfeito_pisos/blob/main/assets/rodape.png?raw=true"
                        alt="Instalação de rodapé em poliestireno para casas e apartamentos." className="foto-3" />

                    <div className="card">

                    </div>
                </div>
            </div>
        </div>
    )
}