import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const showText = (e) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <main className="section-center">
      <h4>Tired of boring lorem ipsum?</h4>
      <form className="form lorem-form" onSubmit={showText}>
        <label className="form-label" htmlFor="count">
          Paragraphs
        </label>
        <input
          className="form-input"
          onChange={(e) => setCount(e.target.value)}
          value={count}
          id="count"
          type="number"
          min={1}
          max={8}
          step={1}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <div className="lorem-text">
        {text.map((item) => (
          <p key={nanoid()}>{item}</p>
        ))}
      </div>
    </main>
  );
};
export default App;
