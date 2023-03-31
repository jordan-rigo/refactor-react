import React, { FC, PropsWithChildren, ReactElement } from "react";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import Input from "../../components/Input";

export interface FormLazyProps {
  children: ReactElement;
  onSubmit: () => void;
}

interface FieldsProps {
  register: UseFormRegister<FieldValues>;
}

export const FormLazy: FC<FormLazyProps> = ({ children, onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const renderChildren = () => {
    return React.Children.map(
      children,
      (child: ReactElement<PropsWithChildren<FieldsProps>>) => {
        return React.cloneElement(child, {
          register,
        });
      }
    );
  };

  return (
    <div>
      <h1>Ez a magyar 1</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {renderChildren()}

        <label>Description</label>
        <Input type="text" {...register("description")} />

        <button>Submit</button>
      </form>
    </div>
  );
};

export const PatientFields: FC<FieldsProps> = ({ register }) => {
  return (
    <div>
      <label>Name</label>
      <Input type="text" {...register("name")} />

      <label>D.o.b.</label>
      <Input type="date" {...register("dob")} />
    </div>
  );
};

export const CaseFields: FC<FieldsProps> = ({ register }) => {
  return (
    <div>
      <label>Date of apperance</label>
      <Input type="text" {...register("date")} />
    </div>
  );
};
