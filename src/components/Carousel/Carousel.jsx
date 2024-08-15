import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselContainer,
  CarouselItem,
  CustomCarousel,
} from "./CarouselStyles";

const carouselItems = [
  { title: "QR Code Generator", component: "QRCodeGenerator" },
  { title: "IP Address Finder", component: "IPAddressFinder" },
  { title: "Movie Search Engine", component: "MovieSearchEngine" },
  { title: "Todo App", component: "TodoApp" },
  { title: "Quiz App", component: "QuizApp" },
  { title: "Language Translator", component: "LanguageTranslator" },
];
export function Carousel({ onComponentSelect }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Função para definir o componente atual a ser exibido e atualizar o índice do carrossel.
  // Ela usa a função onComponentSelect passada como prop para atualizar o componente atual.
  const handleAccess = (component) => {
    onComponentSelect(component);
  };
  return (
    <CarouselContainer>
      <CustomCarousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        selectedItem={carouselIndex}
        onChange={(index) => setCarouselIndex(index)}
      >
        {carouselItems.map(({ title, component }) => (
          <CarouselItem key={component}>
            <h2>{title}</h2>
            <button onClick={() => handleAccess(component)}>Acessar</button>
          </CarouselItem>
        ))}
      </CustomCarousel>
    </CarouselContainer>
  );
}
