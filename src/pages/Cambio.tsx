import { useParams } from "react-router-dom";
import CambiarNombre from "./CambiarNombre";
import CambiarContrasena from "./CambiarContrasena";
import CambiarUsuario from "./CambiarUsuario";
import CambiarCorreo from "./CambiarCorreo";

const Cambio = () => {
  const { cambio } = useParams<{ cambio: string }>();
  switch (cambio) {
    case "usuario":
      return <CambiarUsuario />;
    case "contrasena":
      return <CambiarContrasena />;
    case "email":
      return <CambiarCorreo />;
    case "nombre":
      return <CambiarNombre />;
    default:
      return <h1>404</h1>;
  }
};

export default Cambio;
