import logo from "./logo.svg";
const Inventory = () => {
  return (
    <div className="h-full  bg-white p-4">
      <header className="flex flex-row justify-center align-items border-b	 border-slate-600">
        <div className="basis-1/12 flex justify-center items-center">
          {/* <img src={logo}></img> */}
        </div>
        <div className=" flex justify-center basis-3/12 bg-slate-100 rounded-lg">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input type="text" className="bg-transparent w-full h-full" />
        </div>
        <div className="basis-8/12 flex flex-row justify-end">
          <button className="bg-transparent w-40 h-10 border border-slate-200 rounded-lg flex justify-center items-center gap-x-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </div>
            ورود | ثبت نام
          </button>
        </div>
      </header>

      <div className="flex flex-row justify-center align-items container max-w-screen-xl mx-auto mt-14 gap-x-4">
        <div className="basis-3/12 border border-slate-200 rounded-lg">
          <div className="flex justify-between items-center p-4 gap-x-2">
            <div className="basis-2/12">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center items-center">
                <div className="text-white text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-00 w-11"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="basis-5/12 flex flex-col justify-center">
              <h2>میثم صالحی</h2>
              <h2>09366766239 </h2>
            </div>
            <div className="basis-5/12 flex flex-row justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 gap-x-2">
            <div className="basis-2/12">
              <div className="w-12 h-12 bg-stone-200 rounded-full flex justify-center items-center">
                <div className="text-white text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-00 w-11"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="basis-5/12 flex flex-col justify-center">
              <h2>میثم صالحی</h2>
              <h2>09366766239 </h2>
            </div>
            <div className="basis-5/12 flex flex-row justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                <path
                  fillRule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div>
            <ul>
              <li className="py-4 hover:bg-stone-100 w-full border-b border-stone-100 ">
                <a href="#" className="mx-4">
                  لینک شماره یک
                </a>
              </li>
              <li className="py-4 hover:bg-stone-100 w-full border-b border-stone-100 ">
                <a href="#" className="mx-4">
                  لینک شماره یک
                </a>
              </li>
              <li className="py-4 hover:bg-stone-100 w-full border-b border-stone-100 ">
                <a href="#" className="mx-4">
                  لینک شماره یک
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-8/12 max-h-10 border border-slate-200 rounded-lg flex justify-between items-center p-4">
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
            برای افزایش امنیت حساب کاربری خود و جلوگیری از سوءاستفاده، لطفا هویت
            خود را تایید کنید
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 basis-2/12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center w-80	 gap-x-80">
        <div>logo</div>
        <div>logo</div>
        <div>logo</div>
      </div>
    </div>
  );
};

export default Inventory;
