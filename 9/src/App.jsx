import { useState } from "react";
import { ColorList } from "./templates/ColorList";
import Form from "./templates/Form";
import Values from "values.js";

import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" autoClose={3000} />
    </main>
  );
};
export default App;
