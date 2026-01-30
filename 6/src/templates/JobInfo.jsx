import { v4 as uuidv4 } from "uuid";
import Duties from "./Duties";
const JobInfo = ({ jobInfo, currentItem }) => {
  const { id, company, dates, title, duties } = jobInfo[currentItem];
  return (
    <section>
      <h2>{title}</h2>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <ul>
        {duties.map((item) => {
          return <Duties key={uuidv4()} text={item} />;
        })}
      </ul>
    </section>
  );
};
export default JobInfo;
