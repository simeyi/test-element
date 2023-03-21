import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import formJSON from "../assets/form.json";
import { Element } from "./form/Element";

type FormData = {
  firstName: string;
  age: number;
  lastName: string;
};

type Field = {
  field_type: string;
  field_label: string;
  field_placeholder: string;
  register: any;
  name: string;
  errorMessage: string | undefined;
  validation: {};
};

export const Form = () => {
  /*   const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2),
  
    lastName: z.string().min(4).max(12),
  }); */
  const [elements, setElements] = useState<any>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  
  useEffect(() => {
    setElements(formJSON);
  }, []);
  //console.log("🚀 ~ file: Form.tsx:38 ~ Form ~ elements:", elements);
  
  console.log("🚀 ~ file: Form.tsx:35 ~ Form ~ errors:", errors)
  const fields = elements?.map((field: any, i: number) => {
    const validation = {
      required: false,
      maxLength: {
        value: Number.parseInt(field._attributes?.MaxLength),
        message: "MaxLength", // JS only: <p>error message</p> TS only support string
      },
 /*      minLength: {
        value: 1,
        message: "minLength", // JS only: <p>error message</p> TS only support string
      },
      max: {
        value: 3,
        message: "max", // JS only: <p>error message</p> TS only support string
      },
      min: {
        value: 3,
        message: "min", // JS only: <p>error message</p> TS only support string
      }, */
      valueAsNumber: field._attributes.Type === "Edm.Int32" ? true : false,
    };
    return {
      field_label: field._attributes["sap:label"],
      field_placeholder: field._attributes.Name,
      field_type: field._attributes.Type,
      name: field._attributes.Name,
      register: register,
      validation: {...validation},
      errorMessage:errors[field._attributes.Name]?.message,
    };
  });
  //console.log("🚀 ~ file: Form.tsx:38 ~ Form ~ fields:", fields);

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3"
        >
          {fields
            ? fields.map((input: Field, i: number) => (
                <div key={i}>
                  <Element {...input} />
                  <p></p>
                </div>
              ))
            : null}
          <button className="w-fit border-black border-2 rounded-md p-2 bg-teal-200 block hover:bg-teal-400">
            Submit Data
          </button>
        </form>
      </div>
    </>
  );
};
