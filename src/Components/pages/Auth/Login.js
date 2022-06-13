import Logo from "./../../../assets/icon/svg/Logo";
import Input from "./../../../Common/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import SubmitBtn from "./../../../Common/SubmitBnt";

const Login = () => {
  const initialValuesFormik = {
    userName: "",
    password: "",
  };

  const requiredMessage = "ورود مقدار الزامی است";
  const justNumberMessage = " مقدار ورودی صرفا عددی باشد";

  const validationSchema = yup.object({
    userName: yup.string().required(requiredMessage),
    password: yup.string().required(requiredMessage),
  });

  const onSubmit = (values) => {
    // dispatch(
    //   addAsyncProducts({ values: { ...values, id: Math.floor(Math.random() * 1000) } }),
    // );
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: initialValuesFormik,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form className="m-auto flex justify-center p-10 " onSubmit={formik.handleSubmit}>
      <div className="bg-white border border-slate-200 rounded-lg w-96 max-h-screen m-10">
        <div className="mx-auto my-4 flex flex-col justify-center items-center">
          <Logo />
        </div>
        <span className="flex flex-rw justify-start items-center mx-3 font-extrabold text-md">
          ورود | ثبت نام
        </span>

        <div className="flex flex-col justify-center items-center mx-4 mt-8">
          <div className="w-full mb-4">
            <Input label="نام کاربری " formik={formik} id="userName" name="userName" />
          </div>

          <div className="w-full mb-4">
            <Input
              label="رمز عبور  "
              formik={formik}
              id="password"
              name="password"
              type="password"
            />
          </div>

          <SubmitBtn isValid={!formik.isValid} />

          <button
            type="reset"
            onClick={(e) => formik.resetForm()}
            className="bg-rose-500  border-0 py-2 px-20 rounded-xl text-white w-full"
          >
            لفو
          </button>
          <span className="text-xs my-4">
            ورود شما به معنای پذیرش شرایط و قوانین حریم ‌خصوصی است
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
