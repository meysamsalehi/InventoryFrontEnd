import { useSelector } from "react-redux";
import Category from "./../Category";
import { getAsyncCategories } from "./../../features/category/categorySlice";

const CategoryList = (props) => {
  //   props.history.push("AboutUs");
  const dispatch = useDispatch();

  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAsyncCategories());
  }, []);

  return (
    <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4">
      <div className=" border border-slate-200 rounded-lg flex flex-col justify-between items-between p-4 gap-y-4">
        <div className="flex justify-between items-center">
          <div className="text-lg border-b-4  border-red-400">لیست دسته بندی ها </div>
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
        {categories.map((category, index) => {
          return <Category key={index} category={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoryList;
