import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselContainer,
  CarouselItem,
  CustomCarousel,
} from "./CarouselStyles";

const carouselItems = [
  { title: "QR Code Generator", component: "qr-code-generator" },
  { title: "IP Address Finder", component: "ip-address-finder" },
  { title: "Movie Search Engine", component: "movie-search" },
  { title: "Todo App", component: "todo-app" },
  { title: "Quiz App", component: "quiz-app" },
  { title: "Language Translator", component: "language-translator" },
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
      {/* Desativei os thumbs pois essa lib tem um problema com map e components customizados https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md */}
      <CustomCarousel
        showThumbs={false}
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
