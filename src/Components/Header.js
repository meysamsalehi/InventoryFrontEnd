import logo from './../logo.svg';

const Header = () => {
  return (
    <header className="flex flex-row justify-center align-items border-b border-slate-100 py-4">
      <div className="basis-1/12 flex justify-center items-center">
        <img src={logo}></img>
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
  );
};

export default Header;
