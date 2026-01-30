import { v4 as uuidv4 } from "uuid";
const BtnContainer = ({ jobArr, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobArr.map((company) => {
        return (
          <button
            className={
              currentItem === jobArr.indexOf(company)
                ? "active-btn job-btn"
                : "job-btn"
            }
            onClick={() => setCurrentItem(jobArr.indexOf(company))}
            key={uuidv4()}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
