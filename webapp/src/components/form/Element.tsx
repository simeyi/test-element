import { NumericInput } from "./elements/NumericInput";
import { TextInput } from "./elements/TextInput";

type Field = {
  field_type: string;
  field_label: string;
  field_placeholder: string;
  register: any;
  name: string;
  errorMessage: string | undefined;
  validation: {};
};

export const Element = (field : Field) => {
  //console.log("🚀 ~ file: Element.tsx:15 ~ Element ~ field:", field);
  switch (field.field_type) {
    case "Edm.String":
      return (
        <TextInput
          field_label={field.field_label}
          field_placeholder={field.field_placeholder}
          name={field.name}
          register={field.register}
          validation={field.validation}
          errorMessage={field.errorMessage}
        />
      );
    case "Edm.Int32":
      return (
        <NumericInput
          field_label={field.field_label}
          field_placeholder={field.field_placeholder}
          name={field.name}
          register={field.register}
          validation={field.validation}
          errorMessage={field.errorMessage}
        />
      );
    default:
      return null;
  }
};
