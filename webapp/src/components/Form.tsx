import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { TextInput } from "./form/TextInput";

type FormData = {
  firstName: string;
  lastName: string;
};

export const Form = () => {
  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(4).max(12),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3"
        >
          <TextInput
            field_label="First Name"
            field_placeholder=""
            name="firstName"
            register={register}
            errorMessage={errors.firstName?.message}
          />
          <TextInput
            field_label="Last Name"
            field_placeholder=""
            name="lastName"
            register={register}
            errorMessage={errors.lastName?.message}
          />
          <button className="w-fit border-black bg-teal-200 block">
            Submit Data
          </button>
        </form>
      </div>
    </>
  );
};
