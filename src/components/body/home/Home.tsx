import { useState, useEffect } from "react";
import "./Home.scss";

interface SlideProps {
    imagem: string;
    texto: string;
}

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides: SlideProps[] = [
        {
            imagem:
            "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_1.jpg?raw=true",
            texto: "Piso Vinílico",
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_2.jpg?raw=true",
            texto: "Piso Laminado",
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_3.jpg?raw=true",
            texto: "Boiserie",
        },
        {
            imagem:
                "https://github.com/joosilva/aperfeito_pisos/blob/main/assets/slide_4.jpg?raw=true",
            texto: "Rodapé",
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
                        <img src={slide.imagem} alt={slide.texto} />
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
