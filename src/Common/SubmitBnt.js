const SubmitBtn = ({ title }) => {
  return (
    <button
      type="submit"
      className="bg-green-600 px-3 py-2 border-0 rounded-xl text-white"
    >
      {title || "ثبت"}
    </button>
  );
};

export default SubmitBtn;
