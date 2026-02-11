import { createContext, useContext, useState } from "react";
const globalContextApp = createContext();

export const useGlobalContext = () => useContext(globalContextApp);

const GlobalContextApp = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  return (
    <globalContextApp.Provider
      value={{ isSidebarOpen, closeSidebar, openSidebar, pageId, setPageId }}
    >
      {children}
    </globalContextApp.Provider>
  );
};
export default GlobalContextApp;
