import React from "react";
import Button from "../Button";
import FormStructure from "../../types/FormStructure";
import FormStructureList from "./FormStructureList";
import Modal from "../Modal";

interface AppFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel?: () => void;
  title: string;
  btnText: string;
  structure: FormStructure[];
  formRef: React.RefObject<HTMLFormElement>;
  modalTitle?: string;
  modalMessage?: string;
  modalActions?: React.ReactNode;
}

const AppForm: React.FC<AppFormProps> = ({
  handleSubmit,
  onCancel,
  title,
  btnText,
  structure,
  formRef,
  modalTitle,
  modalMessage,
  modalActions,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <div className="appform">
        <h1 className="appform__title title">{title}</h1>
        <form className="appform__form" ref={formRef}>
          <div className="appform__wrapper">
            <FormStructureList structure={structure} />
          </div>
          <div className="appform__submit">
            <Button
              type="primary"
              onClick={(e) => {
                e?.preventDefault();
                let modalCanShow = true;
                structure.map((formStructure) => {
                  formStructure.fields.map((field) => {
                    if (field.pattern) {
                      const input = document.getElementById(field.id);
                      if (input) {
                        if (
                          !new RegExp(field.pattern).test(
                            (input as HTMLInputElement).value
                          )
                        ) {
                          (input as HTMLInputElement).style.boxShadow =
                            "0 0 0 2px red";
                          const submitBtn = document.querySelector(
                            ".appform__submit button"
                          );
                          if (submitBtn) {
                            (submitBtn as HTMLButtonElement).disabled = true;
                          }
                          modalCanShow = false;
                          const error = document.createElement("p");
                          error.style.color = "red";
                          error.style.fontSize = "1.2rem";
                          error.style.marginTop = "-1.5rem";
                          error.style.marginBottom = "1.5rem";
                          error.innerHTML = `El campo ${field.label} no es válido por los siguientes motivos: <br /> ${field.patternError} o está vacío`;
                          input.parentNode?.appendChild(error);
                          setTimeout(() => {
                            (submitBtn as HTMLButtonElement).disabled = false;
                            modalCanShow = true;
                          }, 1000);
                          setTimeout(() => {
                            (input as HTMLInputElement).style.boxShadow = "";
                            error.remove();
                          }, 5000);
                        }
                      }
                    }
                  });
                });
                modalCanShow
                  ? modalTitle && modalMessage && modalActions
                    ? setIsOpen(true)
                    : handleSubmit(e as React.FormEvent<HTMLFormElement>)
                  : setIsOpen(false);
              }}
            >
              {btnText}
            </Button>
            {onCancel && (
              <Button
                type="cancel"
                onClick={(e) => {
                  e?.preventDefault();
                  onCancel();
                }}
              >
                Cancelar
              </Button>
            )}
          </div>
        </form>
        {modalTitle && modalMessage && modalActions && (
          <Modal
            title={modalTitle}
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            actions={modalActions}
          >
            {modalMessage}
          </Modal>
        )}
      </div>
    </>
  );
};

export default AppForm;
