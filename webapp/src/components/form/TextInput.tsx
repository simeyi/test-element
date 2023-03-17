export const TextInput = ({
  field_label,
  field_placeholder,
  register,
  name,
  errorMessage,
}: {
  field_label: string;
  field_placeholder: string;
  register: any;
  name: string;
  errorMessage: string | undefined;
}) => {
  return (
    <>
      <div className="grid grid-cols-1">
        <label htmlFor="textInput" className="text-xl">
          {field_label}
        </label>
        <input
          type="text"
          className="border-2 
        border-gray-300 border-solid rounded-md p-2 
        bg-slate-100 shadow-md 
        focus:bg-slate-50  selection:border-solid selection:border-gray-400"
          placeholder={field_placeholder ? field_placeholder : " "}
          {...register(name)}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </>
  );
};
