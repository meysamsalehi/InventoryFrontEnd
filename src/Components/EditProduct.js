import Input from "../Common/Input";
import SubmitBtn from "../Common/SubmitBnt";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useProducts, useProductsAction } from "./Providers/InventoryProvider";
import Select from "../Common/Select";

const EditProduct = ({ editPro }) => {
  const product = useProducts();
  const dispatch = useProductsAction();

  const { register, handleSubmit } = useState();

  const initialValuesFormik = editPro;

  const selectOption = [
    { id: 1, value: "web", label: "وب" },
    { id: 2, value: "mobile", label: "موبایل" },
  ];

  // if (editPro.id) {
  //   initialValuesFormik = editPro;
  // }

  const onSubmit = (values) => {
    dispatch({ type: "add", values });
  };

  const requiredMessage = "ورود مقدار الزامی است";
  const justNumberMessage = " مقدار ورودی صرفا عددی باشد";

  const validationSchema = yup.object({
    title: yup.string().required(requiredMessage),
    quantity: yup
      .number()
      .typeError(justNumberMessage)
      .positive("age must be greater than zero")
      .required(requiredMessage),
    category: yup.string().required(requiredMessage),
    // gender: yup.string().required(),
    // nationality: yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialValuesFormik,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-y-6">
        <div className="flex flex-row w-full gap-x-2">
          <div className="w-1/2">
            <Input label="عنوان محصول" formik={formik} id="title" name="title" />
          </div>
          <div className="w-1/2">
            <Input label="تعداد محصول " formik={formik} id="quantity" name="quantity" />
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-2">
          <div className="w-1/2">
            <Select
              label="دسته بندی"
              formik={formik}
              id="category"
              name="category"
              selectOption={selectOption}
            />
          </div>
        </div>

        <div className="flex justify-start items-center gap-x-3">
          <SubmitBtn isValid={!formik.isValid} />

          <button
            type="reset"
            onClick={(e) => formik.resetForm()}
            className="bg-rose-500 px-20 py-2 border-0 rounded-xl text-white"
          >
            لفو
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
