import React from "react";
import FormStructure from "../../types/FormStructure";
import FormCategoryList from "./FormCategoryList";

interface FormStructureListProps {
  structure: FormStructure[];
}

const FormStructureList: React.FC<FormStructureListProps> = ({ structure }) => {
  return (
    <>
      {structure.map((categories, idx) => (
        <div className="appform__wrapper__element" key={idx}>
          <FormCategoryList categories={categories} />
        </div>
      ))}
    </>
  );
};

export default FormStructureList;
