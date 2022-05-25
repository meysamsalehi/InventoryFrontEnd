import Product from "./../Product";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../Common/Input";
import { useState } from "react";
import { filterTitleProduct } from "../../redux/product/productAction";

const ProductList = (props) => {
  //   props.history.push("AboutUs");

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const products = useSelector((state) => state.product);

  const changeHandler = (e) => {
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4">
      <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4 gap-y-4">
        <div className="flex justify-between items-center">
          <div className="text-lg border-b-4  border-red-400">لیست محصولات انبار</div>
          <div className="text-sm flex flex-row justify-between items-center text-cyan-500">
            مشاهده همه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 basis-2/12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        <div className="">
          <input
            type="text"
            onChange={changeHandler}
            value={value}
            placeholder="Search input"
            className="bg-transparent px-3 py-2 border border-slate-200 rounded-xl text-sm"
          />
        </div>

        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
