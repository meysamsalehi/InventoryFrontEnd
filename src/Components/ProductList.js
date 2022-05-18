import { useProducts, useProductsAction } from "./Providers/InventoryProvider";
import Product from "./Product";
import { useState } from "react";
import ProductAdd from "./ProductAdd";
import Input from "./../Common/Input";

const ProductList = () => {
  const products = useProducts();
  const dispatch = useProductsAction();

  return (
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
      {products.map((product) => {
        return (
          <>
            <Product product={product} />
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
