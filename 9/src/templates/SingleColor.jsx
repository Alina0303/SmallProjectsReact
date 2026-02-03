import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const saveOnClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Clipboard access is not available");
      }
    }
  };
  return (
    <article
      onClick={saveOnClipboard}
      className={index > 10 ? "color color-light" : "color color-dark"}
      style={{ backgroundColor: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};
export default SingleColor;
