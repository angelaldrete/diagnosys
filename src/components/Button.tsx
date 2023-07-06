import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  children?: React.ReactNode;
  type: "primary" | "secondary" | "add" | "cancel" | "logout";
  onClick: (
    e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => void;
}

const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  switch (type) {
    case "primary":
      return (
        <button className="btn btn--primary" onClick={onClick}>
          {children}
        </button>
      );
    case "secondary":
      return (
        <button className="btn btn--secondary" onClick={onClick}>
          {children}
        </button>
      );
    case "add":
      return (
        <button className="btn btn--add" onClick={onClick}>
          <FontAwesomeIcon icon={faPlus} className="btn--icon" />
        </button>
      );
    case "cancel":
      return (
        <button className="btn btn--cancel" onClick={onClick}>
          {children}
        </button>
      );
    case "logout":
      return (
        <button className="btn btn--logout" onClick={onClick}>
          {children}
        </button>
      );
    default:
      return (
        <button className="btn" onClick={onClick}>
          {children}
        </button>
      );
  }
};

export default Button;
