import sublinks from "../data";
import { useGlobalContext } from "../GlobalContextApp";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map(({ pageId, page }) => {
        return (
          <button
            className="nav-link"
            key={pageId}
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
