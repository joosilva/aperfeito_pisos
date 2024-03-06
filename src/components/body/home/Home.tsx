import { useEffect, useState } from "react";
import "./Home.scss";

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const imagens = [
        'imagem1.jpg',
        'imagem2.jpg',
        'imagem3.jpg',
        'imagem4.jpg'
    ];

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % imagens.length;
        setCurrentIndex(nextIndex);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slide-container">
            <div className="slide">
                {imagens.map((imagem, index) => (
                    <div
                        key={index}
                        className={`slide-item ${index === currentIndex ? 'ativo' : ''}`}
                        style={{ backgroundImage: `url(${imagem})` }}
                    ></div>
                ))}
            </div>
            <div className="barra-navegacao">
                {imagens.map((_, index) => (
                    <span
                        key={index}
                        className={`ponto ${index === currentIndex ? 'ativo' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}