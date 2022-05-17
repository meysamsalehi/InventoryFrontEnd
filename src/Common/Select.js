const Select = ({ name, label, formik }) => {
  const options = [
    { title: "تحت وب", value: "web" },
    { title: "شبکه", value: "net" },
  ];
  return (
    <>
      <select
        {...formik.getFieldProps(name)}
        id={name}
        name={name}
        className="bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-sm w-full"
      >
        <option selected value="">
          انتخاب کنید
        </option>
        {options.map((options) => {
          return <option value={options.value}>{options.title}</option>;
        })}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-rose-500 text-xs mr-2">{formik.errors[name]}</span>
      )}
    </>
  );
};

export default Select;
