import { Persen } from "./Persen";
export const List = ({ data }) => {
  return (
    <div>
      {data.map((persen) => {
        return <Persen key={persen.id} {...persen} />;
      })}
    </div>
  );
};
