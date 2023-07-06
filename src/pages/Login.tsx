import React from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure, { FormFieldType } from "../types/FormStructure";
import Logo from "../components/Logo";
import Card from "../components/Card";
import { UserContext } from "../context/UserContext";
import api from "../axios";
import User from "../types/User";

const Login = () => {
  const { updateLoggedIn } = React.useContext(UserContext);
  const loginFormRef = React.useRef<HTMLFormElement>(null);

  const handleLogin = () => {
    const formData = new FormData(loginFormRef.current!);
    const username = formData.get("username");
    const password = formData.get("password");

    api
      .post("/users/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.status === 200) {
          updateLoggedIn(res.data.token, true, res.data.user as User);
        } else if (res.status === 401) {
          alert("Usuario o contraseña incorrectos");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginFormStructure: FormStructure[] = [
    {
      category: "login",
      fields: [
        {
          id: "username",
          label: "Usuario",
          type: FormFieldType.text,
          placeholder: "Usuario",
        },
        {
          id: "password",
          label: "Contraseña",
          type: FormFieldType.password,
          placeholder: "Contraseña",
        },
      ],
    },
  ];

  return (
    <div className="login">
      <div className="login__wrapper">
        <h1 className="login__title login__title--light">Bienvenido a </h1>
        <Logo type="light" />
      </div>
      <Card className="login__card">
        <AppForm
          title="Iniciar sesión"
          btnText="Iniciar sesión"
          structure={loginFormStructure}
          formRef={loginFormRef}
          handleSubmit={handleLogin}
        />
      </Card>
    </div>
  );
};

export default Login;
