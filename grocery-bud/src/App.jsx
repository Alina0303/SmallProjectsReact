import { useState } from "react";
import Form from "./templates/Form";
import Items from "./templates/Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const error = () => {
  toast.error("Empty", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const added = () => {
  toast.success("Added to list", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const removed = () => {
  toast.info("Item was removed", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const getFromLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};
const setLocalStorage = (item) => {
  localStorage.setItem("list", JSON.stringify(item));
};

const App = () => {
  const [items, setItems] = useState(getFromLocalStorage);
  const addItem = (itemName) => {
    const oneItem = {
      id: nanoid(),
      value: itemName,
      completed: false,
    };
    const newItems = [...items, oneItem];
    setItems(newItems);
    setLocalStorage(newItems);
    added();
  };
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    removed();
  };
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });

    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <main className="section-center">
      <Form addItem={addItem} error={error} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer />
    </main>
  );
};

export default App;
