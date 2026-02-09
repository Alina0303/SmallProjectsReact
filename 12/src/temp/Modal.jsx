import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../globalContext";

const Modal = () => {
  const { closeModal, modalIsOpen } = useGlobalContext();

  return (
    <div
      style={{ visibility: modalIsOpen ? "visible" : "hidden" }}
      className="layout"
    >
      <div className="modal_content">
        <button className="close_btn" onClick={closeModal}>
          <IoMdClose />
        </button>
        <h3>Modal content</h3>
      </div>
      <ul className="items"></ul>
    </div>
  );
};
export default Modal;
