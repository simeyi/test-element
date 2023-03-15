import { DropDownInput } from "./form/DropDownInput";
import { NumericInput } from "./form/NumericInput";
import { TextInput } from "./form/TextInput";

export const Form = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3">
        <TextInput />
        <NumericInput />
        <DropDownInput />
      </div>
    </>
  );
};
