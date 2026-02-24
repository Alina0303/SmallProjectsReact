import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { Tours } from "./components/Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const fetchTours = () => {
    setLoading(false);
    fetch(url, {
      method: "GET",
    })
      .then((respons) => respons.json())
      .then((data) => {
        setTours(data);
      })
      .catch((err) => console.error(err));

    setTimeout(() => {
      return setLoading(true);
    }, 2000);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((item) => item.id != id);
    setTours(newTours);
  };

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
        </div>
        <button className="btn" onClick={() => fetchTours()}>
          refresh
        </button>
      </main>
    );
  }
  return (
    <main>
      {loading ? <Tours removeTour={removeTour} tours={tours} /> : <Loading />}
    </main>
  );
};
export default App;
