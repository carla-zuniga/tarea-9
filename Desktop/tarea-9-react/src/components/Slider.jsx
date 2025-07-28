import { useEffect, useState } from "react";
import "./Slider.css";

const images = ["/slider1.jpg", "/slider2.jpg", "/slider3.jpg"];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide ${index + 1}`}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        />
      ))}


      {/* Puntitos */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Slider;
