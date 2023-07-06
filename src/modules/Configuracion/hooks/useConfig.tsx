import ConfigItemBase from "../../../types/ConfigItemBase";

const useConfig = () => {
  const config: ConfigItemBase[] = [
    {
      title: "Cambio de nombre de usuario",
      description: "Cambia tu nombre de usuario actual por uno nuevo.",
      path: "/configuracion/usuario",
    },
    {
      title: "Cambio de contraseña",
      description: "Cambia tu contraseña actual por una nueva.",
      path: "/configuracion/contrasena",
    },
    {
      title: "Cambio de correo electrónico",
      description: "Cambia tu correo electrónico actual por uno nuevo.",
      path: "/configuracion/email",
    },
    {
      title: "Cambio de nombre",
      description: "Cambia tu nombre actual por uno nuevo.",
      path: "/configuracion/nombre",
    },
  ];

  return config;
};

export default useConfig;
