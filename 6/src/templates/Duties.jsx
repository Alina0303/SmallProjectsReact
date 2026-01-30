import { MdOutlineFastForward } from "react-icons/md";
const Duties = ({ text }) => {
  return (
    <div className="job-desc">
      <MdOutlineFastForward className="job-icon" />
      <p>{text}</p>
    </div>
  );
};
export default Duties;
