import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
export const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((item, index) => {
        return <SingleColor key={nanoid()} color={item} index={index} />;
      })}
    </section>
  );
};
