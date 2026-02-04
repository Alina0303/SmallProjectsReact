import { useState } from "react";

const Form = ({ addItem, added, error }) => {
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") {
      error();
    } else {
      addItem(newItem);
      added();
    }
    setNewItem("");
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            className="form-input"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
          />
          <button className="btn" type="submit">
            Add item
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
