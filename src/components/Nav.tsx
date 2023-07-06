import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import {
  faHome,
  faUser,
  faCog,
  faSignOutAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import { UserContext } from "../context/UserContext";
import Modal from "./Modal";

const Nav = () => {
  const { updateLoggedIn } = React.useContext(UserContext);
  const navLinks = [
    {
      name: "Inicio",
      path: "/",
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      name: "Consultas",
      path: "/consultas",
      icon: <FontAwesomeIcon icon={faCalendar} />,
    },
    {
      name: "Pacientes",
      path: "/pacientes",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      name: "Configuración",
      path: "/configuracion",
      icon: <FontAwesomeIcon icon={faCog} />,
      bottom: true,
    },
    {
      name: "Salir",
      path: "/salir",
      icon: <FontAwesomeIcon icon={faSignOutAlt} />,
      bottom: true,
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav>
      <Logo />
      {navLinks.map((link, index) =>
        link.name === "Salir" ? (
          <Button type="logout" key={index} onClick={() => setIsOpen(true)}>
            {link.icon} {link.name}
          </Button>
        ) : (
          <Link
            key={index}
            to={link.path}
            style={
              link.bottom && index === navLinks.length - 2
                ? {
                    marginTop: "auto",
                  }
                : {}
            }
          >
            {link.icon} {link.name}
          </Link>
        )
      )}
      <Modal
        title="Cerrar sesión"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        actions={
          <button
            className="btn btn--secondary"
            onClick={() => {
              updateLoggedIn(false);
              // href && window.location.replace(href);
            }}
          >
            Cerrar sesión
          </button>
        }
      >
        ¿Estás seguro que deseas cerrar sesión?
      </Modal>
    </nav>
  );
};

export default Nav;
