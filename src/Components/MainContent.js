import delivered from "./../img/status-delivered.svg";
import processing from "./../img/status-processing.svg";
import returned from "./../img/status-returned.svg";
import ProductAdd from "./ProductAdd";

const MainContent = () => {
  return (
    <div className="basis-8/12 flex flex-col justify-start gap-y-5 ">
      <div className="max-h-10 border border-slate-200 rounded-lg flex justify-between items-center p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 basis-1/12 flex justify-start"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
        <span className="text-xs text-orange-500 basis-8/12 flex justify-start">
          برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا هویت خود را
          تایید کنید
        </span>

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

      <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4">
        <div className="flex justify-between items-center">
          <div className="text-lg border-b-4  border-red-400">محصولات</div>
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
        <div className="flex justify-evenly items-center p-4 py-10 gap-x-24">
          <div className="flex flex-row justify-center items-center gap-x-2">
            <img src={processing} alt="processing"></img>
            <div className="flex flex-col justify-center items-start gap-y-1">
              <span className="text-md font-semibold">موجودی انبار</span>
              <h2>25</h2>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-2">
            <img src={delivered} alt="delivered"></img>
            <div className="flex flex-col justify-center items-start gap-y-1">
              <span className="text-md font-semibold">کسری موجودی </span>
              <h2>25</h2>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-2">
            <img src={returned} alt="returned"></img>
            <div className="flex flex-col justify-center items-start gap-y-1">
              <span className="text-md font-semibold">مرجوع شده </span>
              <h2>25</h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4 gap-y-14">
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
            <span>عنوان محصول</span>
          </div>
          <div className="flex justify-between items-center">
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
      </div>

      <ProductAdd />
    </div>
  );
};

export default MainContent;