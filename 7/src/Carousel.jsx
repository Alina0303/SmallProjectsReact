import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import { shortList, list, longList } from "./data";
const Carousel = () => {
  const [sliderItems, setSliderItems] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + sliderItems.length) % sliderItems.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % sliderItems.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderInterval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [currentPerson]);
  return (
    <section className="slider-container">
      {sliderItems.map(({ id, image, name, title, quote }, personIndex) => {
        return (
          <div
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img className="person-img" src={image} alt={name} />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </div>
        );
      })}

      <button type="button" className="prev" onClick={prevSlide}>
        <FcPrevious />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FcNext />
      </button>
    </section>
  );
};
export default Carousel;
