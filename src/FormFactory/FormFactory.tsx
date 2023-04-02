import { useForm } from "react-hook-form";

const FormFactory = ({ form, onSubmit }: any) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>{form.label}</h2>

      {form.fields.map((field: any) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === "select" ? (
            <select id={field.name} {...register(field.name)}>
              {field.options?.map((option: any) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              {...register(field.name)}
            />
          )}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormFactory;
