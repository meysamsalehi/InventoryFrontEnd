const Input = ({ placeholder, name, type }) => {
  return (

  
    <div className="flex flex-col justify-center gap-y-2">
      <label for={name}>{placeholder}*</label>
      <input
        id={name}
        name={name}
        type={type || "text"}
        className="bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
