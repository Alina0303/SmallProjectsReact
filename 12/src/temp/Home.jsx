import { useGlobalContext } from "../globalContext";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext();

  return (
    <main>
      <button className="btn sidebar_btn" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn modal_btn" onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};
export default Home;
