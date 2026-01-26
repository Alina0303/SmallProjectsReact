export const Persen = ({ id, name, age, image }) => {
  return (
    <ul className="person" key={id}>
      <img className="img" src={image} alt="name" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </ul>
  );
};
