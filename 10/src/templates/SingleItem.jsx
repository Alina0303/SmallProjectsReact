const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, completed, value } = item;
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed && "line-through",
          textTransform: "capitalize",
        }}
      >
        {value}
      </p>
      <button
        className="remove-btn btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
    </div>
  );
};
export default SingleItem;
