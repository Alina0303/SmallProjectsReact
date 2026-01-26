import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      <h1 className="title">Our tours</h1>
      <span className="title-underline" />
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
};
