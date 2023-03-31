import { Suspense } from "react";
import { lazily } from "react-lazily";

export interface StaticFormsProps {
  onSubmit: () => void;
}

const { FormLazy, PatientFields, CaseFields } = lazily(
  () => import(`./region/${import.meta.env.VITE_APP_REGION}/StaticForms`)
);

export const Form: React.FC = () => {
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
