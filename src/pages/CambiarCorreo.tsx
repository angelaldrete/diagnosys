import React, { useContext } from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure, { FormFieldType } from "../types/FormStructure";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import api from "../axios";

const CambiarCorreo = () => {
  const changeEmailFormRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);

  React.useEffect(() => {
    changeEmailFormRef.current!.currentEmail.value = user?.email;
  }, []);

  const handleSubmit = () => {
    const newEmail = changeEmailFormRef.current!.newEmail.value;

    api
      .put(
        `/users/${user?.id}/email`,
        { newEmail },
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

  const changeEmailFormStructure: FormStructure[] = [
    {
      category: "correo",
      fields: [
        {
          label: "Correo Actual",
          id: "currentEmail",
          placeholder: "Correo Actual",
          type: FormFieldType.email,
          isDisabled: true,
        },
        {
          label: "Nueva Correo",
          id: "newEmail",
          placeholder: "Nueva Correo",
          type: FormFieldType.email,
        },
      ],
    },
  ];

  return (
    <div className="config__change">
      <AppForm
        title="Cambiar Correo"
        btnText="Cambiar Correo"
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
        formRef={changeEmailFormRef}
        structure={changeEmailFormStructure}
        modalTitle="Cambiar Correo"
        modalMessage="¿Estás seguro de cambiar tu correo?"
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

export default CambiarCorreo;
