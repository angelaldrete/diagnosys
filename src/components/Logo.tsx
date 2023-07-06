import React from "react";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

interface LogoProps {
  type?: "dark" | "light";
}

const Logo: React.FC<LogoProps> = ({ type }) => {
  if (type === "dark") {
    return <img src={logoDark} alt="Logo" className="logo" />;
  }
  return <img src={logoLight} alt="Logo" className="logo" />;
};

export default Logo;
