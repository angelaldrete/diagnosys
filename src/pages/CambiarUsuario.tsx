import React from "react";
import AppForm from "../components/Form/AppForm";
import FormStructure, { FormFieldType } from "../types/FormStructure";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import api from "../axios";

const CambiarUsuario = () => {
  const changeUserFormRef = React.useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const { user, updateUser } = useContext(UserContext);

  React.useEffect(() => {
    changeUserFormRef.current!.currentUser.value = user?.username;
  }, []);

  const handleSubmit = () => {
    const username = changeUserFormRef.current!.newUser.value;

    api
      .put(
        `/users/${user?.id}/username`,
        { username },
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

  const changeUsernameFormStructure: FormStructure[] = [
    {
      category: "usuario",
      fields: [
        {
          label: "Usuario Actual",
          id: "currentUser",
          placeholder: "Usuario Actual",
          type: FormFieldType.text,
          isDisabled: true,
        },
        {
          label: "Nuevo Usuario",
          id: "newUser",
          placeholder: "Nuevo Usuario",
          type: FormFieldType.text,
        },
      ],
    },
  ];

  return (
    <div className="config__change">
      <AppForm
        title="Cambiar Usuario"
        btnText="Cambiar Usuario"
        handleSubmit={handleSubmit}
        onCancel={handleCancel}
        formRef={changeUserFormRef}
        structure={changeUsernameFormStructure}
        modalTitle="Cambiar Usuario"
        modalMessage="¿Estás seguro de cambiar tu usuario?"
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

export default CambiarUsuario;
