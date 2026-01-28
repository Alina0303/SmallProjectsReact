import { useState } from "react";
import Title from "./Title";
import Categories from "./Categories";
import data from "./data";
import Menu from "./Menu";

const categoryList = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [uniqueCategories, setUniqueCategories] = useState(categoryList);

  const listByCategories = (category) => {
    const sortedItems = data.filter((item) => item.category === category);
    category === "all" ? setMenuItems(data) : setMenuItems(sortedItems);
  };

  return (
    <main>
      <Title text={"our menu"} />
      <Categories
        categories={uniqueCategories}
        listByCategories={listByCategories}
      />
      <Menu menuItems={menuItems} />
    </main>
  );
};
export default App;
