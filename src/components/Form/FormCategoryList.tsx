import React from "react";
import FormStructure from "../../types/FormStructure";
import FormField from "./FormField";

interface FormCategoryListProps {
  categories: FormStructure;
}

const FormCategoryList: React.FC<FormCategoryListProps> = ({ categories }) => {
  return (
    <>
      {categories.fields.map((field, idx) => (
        <div className="appform__wrapper__field" key={idx}>
          <FormField field={field} />
        </div>
      ))}
    </>
  );
};

export default FormCategoryList;
