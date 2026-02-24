import { useEffect, useState } from "react";
import JobInfo from "./templates/JobInfo";
import BtnContainer from "./templates/BtnContainer";
const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchData = () => {
    setIsLoaded(false);
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const jobArr = isLoaded && [...new Set(data.map((item) => item.company))];

  return (
    <main>
      {isLoaded ? (
        <section className="jobs-center">
          <BtnContainer
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            jobArr={jobArr}
          />
          <JobInfo currentItem={currentItem} jobInfo={data} />
        </section>
      ) : (
        <div className="loading" />
      )}
    </main>
  );
};
export default App;
