import { createContext, useContext, useState } from "react";
const createGlobalContext = createContext();
export const useGlobalContext = () => useContext(createGlobalContext);

const GlobalContext = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const openSidebar = () => setSidebarIsOpen(true);
  const closeSidebar = () => setSidebarIsOpen(false);
  return (
    <createGlobalContext.Provider
      value={{
        modalIsOpen,
        sidebarIsOpen,
        openModal,
        closeModal,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </createGlobalContext.Provider>
  );
};
export default GlobalContext;
