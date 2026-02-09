import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "./FormSchema";
import type{ User } from "../../types/Users";
import { userFormConfig } from "./FormConfig";

interface Props {
  onSubmit: (data: User) => void;
  initialData?: User;
}

const UserForm = ({ onSubmit, initialData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {userFormConfig.map((field) => (
        <div className="mb-3" key={field.name}>
          <label className="form-label">
            {field.label}
            {field.required && <span className="text-danger"> *</span>}
          </label>

          <input
            type={field.type}
            className={`form-control ${
              errors[field.name as keyof User] ? "is-invalid" : ""
            }`}
            {...register(field.name as keyof User)}
          />

          {errors[field.name as keyof User] && (
            <div className="invalid-feedback">
              {errors[field.name as keyof User]?.message}
            </div>
          )}
        </div>
      ))}

      <button type="submit" className="btn btn-primary">
        Save User
      </button>
    </form>
  );
};

export default UserForm;
