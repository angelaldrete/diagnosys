import React from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure, { FormFieldType } from "../types/FormStructure";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import api from "../axios";

const CambiarContrasena = () => {
  const changePasswordFormRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);

  const handleSubmit = () => {
    const currentPassword =
      changePasswordFormRef.current!.currentPassword.value;
    const newPassword = changePasswordFormRef.current!.newPassword.value;
    const confirmPassword =
      changePasswordFormRef.current!.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      const confirmPasswordField =
        changePasswordFormRef.current!.confirmPassword;
      confirmPasswordField.style.boxShadow = "0 0 0 2px red";
      confirmPasswordField.style.border = "1px solid red";
      confirmPasswordField.focus();
      const submitBtn = document.querySelector(
        ".appform__submit button"
      ) as HTMLButtonElement;
      submitBtn.disabled = true;
      const error = document.createElement("p");
      error.innerText = "Las contraseñas no coinciden";
      error.style.color = "red";
      error.style.marginTop = "0.5rem";
      error.style.fontSize = "1.2rem";
      confirmPasswordField.parentNode!.appendChild(error);
      setTimeout(() => {
        confirmPasswordField.style.boxShadow = "";
        confirmPasswordField.style.border = "";
        error.remove();
      }, 5000);
      setTimeout(() => {
        submitBtn.disabled = false;
      }, 1000);
      return;
    }

    api
      .put(
        `/users/${user?.id}/password`,
        { currentPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        updateUser(res.data.user);
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const changePasswordFormStructure: FormStructure[] = [
    {
      category: "password",
      fields: [
        {
          label: "Contraseña Actual",
          id: "currentPassword",
          placeholder: "Contraseña Actual",
          type: FormFieldType.password,
        },
        {
          label: "Nueva Contraseña",
          id: "newPassword",
          placeholder: "Nueva Contraseña",
          type: FormFieldType.password,
        },
        {
          label: "Confirmar Contraseña",
          id: "confirmPassword",
          placeholder: "Confirmar Contraseña",
          type: FormFieldType.password,
        },
      ],
    },
  ];

  return (
    <div className="config__change">
      <AppForm
        title="Cambiar Contraseña"
        btnText="Cambiar Contraseña"
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
        formRef={changePasswordFormRef}
        structure={changePasswordFormStructure}
        modalTitle="Cambiar Contraseña"
        modalMessage="¿Estás seguro de cambiar tu contraseña?"
        modalActions={
          <button
            className="btn btn-primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Aceptar
          </button>
        }
      />
    </div>
  );
};

export default CambiarContrasena;
