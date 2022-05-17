import Input from "../Common/Input";
import SubmitBtn from "../Common/SubmitBnt";

const ProductAdd = () => {
  return (
    <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4 gap-y-6">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w8 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
          <span className="text-lg">عنوان محصول</span>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-green-500 rounded-xl px-3 py-2 text-slate-100 text-sm">
            ثبت محصول
          </button>
        </div>
      </div>

      <form className="flex flex-col gap-y-6">
        <div className="flex flex-row w-full gap-x-2">
          <div className="w-1/2">
            <Input placeholder="نام محصول را وارد نمائید" name="product-title" />
          </div>
          <div className="w-1/2">
            <Input
              placeholder="تعداد موجودی اولیه محصول را وارد نمائید"
              name="product-quantity"
              type="number"
            />
          </div>
        </div>

        <Input placeholder="توضیحات محصول را وارد نمائید" name="product-description" />

        <div className="flex justify-start items-center gap-x-3">
          <SubmitBtn />

          <button
            type="can"
            className="bg-rose-500 px-4 py-2 border-0 rounded-xl text-white"
          >
            لفو
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
