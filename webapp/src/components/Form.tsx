import { useForm } from "react-hook-form";
import { NumericInput } from "./form/NumericInput";
import { TextInput } from "./form/TextInput";
import { MaxLengthMessage, RequiredMessage } from "./form/ValidationMessages";

type FormData = {
  firstName: string;
  age: number;
  lastName: string;
};

export const Form = () => {
  /*   const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2),
  
    lastName: z.string().min(4).max(12),
  }); */
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
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
            validation={{
              required: RequiredMessage,
              maxLength: {
                value: 20,
                message: MaxLengthMessage('20'),
              },
            }}
            errorMessage={errors.firstName?.message}
          />
          <NumericInput
            field_label="Age"
            field_placeholder=""
            name="age"
            register={register}
            errorMessage={errors.age?.message}
            validation={{
              max: { value: 25, message: "must be within 0 - 25" },
            }}
          />
          <TextInput
            field_label="Last Name"
            field_placeholder=""
            name="lastName"
            register={register}
            validation={{ required: false }}
            errorMessage={errors.lastName?.message}
          />
          <button className="w-fit border-black border-2 rounded-md p-2 bg-teal-200 block hover:bg-teal-400">
            Submit Data
          </button>
        </form>
      </div>
    </>
  );
};
