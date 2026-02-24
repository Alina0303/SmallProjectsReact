import { useState } from "react";
import Data from "./data";
import { List } from "./List";
const App = () => {
  const [data, setData] = useState(Data);
  const clearAll = () => setData([]);
  return (
    <div className="container">
      <h3>{data.length} Birthdays Today</h3>
      <List data={data} />
      <button
        type="button"
        className="btn btn-block"
        onClick={() => clearAll()}
      >
        Clear All
      </button>
    </div>
  );
};
export default App;
