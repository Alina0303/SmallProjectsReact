import { useState } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

import { FaQuoteRight } from "react-icons/fa";
import reviews from "./data";
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = reviews[index];

  const prevNumber = () => {
    setIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };
  const nextNumber = () => {
    setIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <main>
      <section className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h2 className="author">{name}</h2>
        <h3 className="job">{job}</h3>
        <p className="info">{text}</p>
      </section>
      <div className="btn-container">
        <button onClick={prevNumber} className="prev-btn">
          <HiOutlineArrowSmLeft />
        </button>
        <button onClick={nextNumber} className="next-btn">
          <HiOutlineArrowSmRight />
        </button>
      </div>
      <button
        onClick={() => setIndex(Math.floor(Math.random() * reviews.length))}
        className="btn"
      >
        surprise me
      </button>
    </main>
  );
};
export default App;
