import sublinks from "../data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../GlobalContextApp";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article className="links" key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
