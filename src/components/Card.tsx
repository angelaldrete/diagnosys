import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick, style }) => {
  return (
    <div
      className={`card ${className ? className : ""}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
