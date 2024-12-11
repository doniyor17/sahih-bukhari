import { useNavigate } from "react-router";

/* eslint-disable react/prop-types */
function Button({ children, onClick, isBack = false }) {
  const navigate = useNavigate();
  return (
    <button
      className="btn mt-2"
      onClick={isBack ? () => navigate(-1) : onClick}
    >
      {isBack ? (
        <span className="text-colorLight">&#8592; Back</span>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
