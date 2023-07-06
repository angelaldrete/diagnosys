import React from "react";
import { FormFieldBase, FormFieldType } from "../../types/FormStructure";

interface FormFieldProps {
  field: FormFieldBase;
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  return (
    <>
      <label htmlFor={field.id}>{field.label}</label>
      {field.type === FormFieldType.textarea ? (
        <textarea
          id={field.id}
          name={field.id}
          value={field.value}
          rows={8}
          cols={10}
          placeholder={field.placeholder}
          {...(field.isDisabled && { disabled: true })}
        />
      ) : field.type === FormFieldType.select ? (
        <select
          id={field.id}
          name={field.id}
          {...(field.isDisabled && { disabled: true })}
        >
          {field.options?.map((option, idx) => (
            <option value={option.id} key={idx}>
              {option.value}
            </option>
          ))}
        </select>
      ) : field.type === FormFieldType.password ? (
        <input
          type="password"
          id={field.id}
          name={field.id}
          value={field.value}
          placeholder={field.placeholder}
          {...(field.pattern && { pattern: field.pattern })}
          {...(field.isDisabled && { disabled: true })}
        />
      ) : (
        <>
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            value={field.value}
            placeholder={field.placeholder}
            {...(field.pattern && { pattern: field.pattern })}
            list={field.list && `${field.id}-list`}
            {...(field.isDisabled && { disabled: true })}
          />
          {field.list && (
            <datalist id={`${field.id}-list`}>
              {field.list.map((option, idx) => (
                <option value={option} key={idx} />
              ))}
            </datalist>
          )}
        </>
      )}
    </>
  );
};

export default FormField;
