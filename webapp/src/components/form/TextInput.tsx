export const TextInput = () => {
  return (
    <>
      <label htmlFor="textInput" className="text-xl">Text Input</label>
      <input
        type="text"
        className="border-2 
        border-gray-300 border-solid rounded-md p-2 
        bg-slate-100 shadow-md 
        focus:bg-slate-50  selection:border-solid selection:border-gray-400"
      />
    </>
  );
};
