import { useState } from "react";

export const SingleQuestion = ({ id, title, info }) => {
  const [showText, setShowText] = useState(false);
  return (
    <li className="question" key={id}>
      <header>
        <h5>{title}</h5>
        <button onClick={() => setShowText(!showText)} className="question-btn">
          {showText ? "-" : "+"}
        </button>
      </header>

      <p>{showText && info}</p>
    </li>
  );
};
