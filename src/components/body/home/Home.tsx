import { useState, useEffect } from "react";
import "./Home.scss";

interface SlideProps {
    imagem: string;
    texto: string;
    alt: string;
}

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides: SlideProps[] = [
        {
            imagem:
            "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_1.jpg?raw=true",
            texto: "Piso Vinílico",
            alt: "Piso em vinílico instalado em sala de apartamento com bela vista para cidade."
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_2.jpg?raw=true",
            texto: "Piso Laminado",
            alt: "Piso laminado instalado em cômodo da casa com paredes em cimento queimado."
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_3.jpg?raw=true",
            texto: "Boiserie",
            alt: "Boiserie  na parede da sala de estar para dar textura de gesso com pintura na cor branca."
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_4.jpg?raw=true",
            texto: "Rodapé",
            alt: "Rodapé de poliestileno branco/colorido instalado em apartamento/casa com piso laminado/vinilico."
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slide-container">
            <div className="slide">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide-item ${index === currentIndex ? "ativo" : ""}`}
                        onClick={() => goToSlide(index)}
                    >
                        <img src={slide.imagem} alt={slide.alt} />
                        <div className="texto-slide super-titulo bold">{slide.texto}</div>
                    </div>
                ))}
            </div>
            <div className="barra-navegacao">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`ponto ${index === currentIndex ? "ativo" : ""}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
