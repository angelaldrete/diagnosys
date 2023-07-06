import React from "react";
import Title from "../../components/Title";

interface WelcomeProps {
  name?: string;
}
const Welcome: React.FC<WelcomeProps> = ({ name }) => {
  return <Title>{name ? `Bienvenido ${name}` : "Bienvenido"}</Title>;
};

export default Welcome;
