import React from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure, { FormFieldType } from "../types/FormStructure";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import api from "../axios";

const CambiarNombre = () => {
  const changeNameFormRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);

  React.useEffect(() => {
    changeNameFormRef.current!.currentFirstName.value = user?.firstName;
    changeNameFormRef.current!.currentLastName.value = user?.lastName;
  }, []);

  const handleSubmit = () => {
    const newName = changeNameFormRef.current!.newName.value;
    const newLastName = changeNameFormRef.current!.newLastName.value;

    api
      .put(
        `/users/${user?.id}/name`,
        { newName, newLastName },
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

  const changeNameFormStructure: FormStructure[] = [
    {
      category: "name",
      fields: [
        {
          label: "Nombre Actual",
          id: "currentFirstName",
          placeholder: "Nombre Actual",
          type: FormFieldType.text,
          isDisabled: true,
        },
        {
          label: "Apellido Actual",
          id: "currentLastName",
          placeholder: "Apellido Actual",
          type: FormFieldType.text,
          isDisabled: true,
        },
        {
          label: "Nuevo Nombre",
          id: "newName",
          placeholder: "Nuevo Nombre",
          type: FormFieldType.text,
        },
        {
          label: "Nuevo Apellido",
          id: "newLastName",
          placeholder: "Nuevo Apellido",
          type: FormFieldType.text,
        },
      ],
    },
  ];

  return (
    <div className="config__change">
      <AppForm
        title="Cambiar Nombre"
        btnText="Cambiar Nombre"
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
        formRef={changeNameFormRef}
        structure={changeNameFormStructure}
        modalTitle="Cambiar Nombre"
        modalMessage="¿Estás seguro de cambiar tu nombre?"
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

export default CambiarNombre;
