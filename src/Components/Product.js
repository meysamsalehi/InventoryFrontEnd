import { useProducts, useProductsAction } from "./Providers/InventoryProvider";
import { useState } from "react";
import EditProduct from "./EditProduct";
import ProductAdd from "./ProductAdd";

const Product = ({ product }) => {
  const products = useProducts();
  const dispatch = useProductsAction();
  const [edit, setEdit] = useState({
    id: null,
    title: "",
    category: false,
    quantity: "",
  });

  console.log(edit);
  return (
    <>
      {edit.id ? (
        <EditProduct editPro={edit} />
      ) : (
        <div
          key={product.id}
          className="flex justify-between items-center border-b border-slate-100 pb-2 hover:bg-slate-100 hover:rounded-lg hover:px-2 py-2"
        >
          <div className="flex justify-start items-center w-3/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w8 text-green-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="mr-3">{product.title}</span>
          </div>
          <div className="flex justify-start items-center gap-x-3 w-3/12">
            <span className="bg-slate-200 w-6 h-6 rounded-full flex flex-row justify-center items-center">
              {product.quantity}
            </span>
            <span onClick={() => dispatch({ type: "increment", id: product.id })}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 "
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {product.quantity === 1 && (
              <span onClick={() => dispatch({ type: "remove", id: product.id })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rose-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}

            {product.quantity !== 1 && (
              <span onClick={() => dispatch({ type: "decrement", id: product.id })}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-rose-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            )}
          </div>

          <div className="flex justify-start items-center w-3/12">
            <span>
              <span>دسته بندی: {product.category}</span>
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div onClick={() => setEdit(product)}>ویرایش</div>
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
      )}
    </>
  );
};

export default Product;
