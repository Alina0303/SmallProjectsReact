import { useGlobalContext } from "../globalContext";
import { IoMdClose } from "react-icons/io";
import logo from "../logo.svg";
import { links, social } from "../data";
const Sidebar = () => {
  const { sidebarIsOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      style={{
        transform: sidebarIsOpen ? "translateX(0)" : "translateX(-100%)",
      }}
      className="sidebar"
    >
      <div className="sidebar_header">
        <img src={logo} alt="logo" />
        <button className="close_side_btn" onClick={closeSidebar}>
          <IoMdClose />
        </button>
      </div>

      <ul className="links">
        {links.map(({ id, url, text, icon }) => {
          return (
            <li key={id}>
              <div>{icon}</div>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
      <div className="icons">
        {social.map(({ id, url, icon }) => {
          return (
            <div key={id}>
              <a href={url}>{icon}</a>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
