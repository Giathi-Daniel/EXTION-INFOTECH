import spinner from "../assets/svg/spinner.svg";
import "../css/Spinner.css";

export default function Spinner() {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <img src={spinner} alt="Loading..." />
      </div>
    </div>
  );
}
