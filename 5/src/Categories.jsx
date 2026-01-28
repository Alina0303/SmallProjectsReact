const Categories = ({ categories, listByCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => {
        return (
          <button
            onClick={() => listByCategories(item)}
            className="btn"
            key={index}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
