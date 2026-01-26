import { useState } from "react";

export const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <div>
          {showInfo ? (
            <p>{info}</p>
          ) : (
            <>
              <p>{info.substring(0, 100)}...</p>
              <button onClick={() => setShowInfo(true)} className="info-btn">
                read more
              </button>
            </>
          )}
        </div>
        <button onClick={() => removeTour(id)} className="btn delete-btn">
          Not Interested
        </button>
      </div>
    </article>
  );
};
