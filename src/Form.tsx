import { Suspense } from "react";
import { lazily } from "react-lazily";

export interface StaticFormsProps {
  onSubmit: () => void;
}

// Dynamically loaded form components based on the value of the current environment variable.

const { FormLazy, PatientFields, CaseFields } = lazily(
  () => import(`./region/${import.meta.env.VITE_APP_REGION}/StaticForms`)
);

export const Form: React.FC = () => {
  // Generic Submit event handler for all forms regardless of region/module
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <FormLazy onSubmit={handleSubmit}>
          <PatientFields />
          <CaseFields />
        </FormLazy>
      </Suspense>
    </div>
  );
};
export default Form;
