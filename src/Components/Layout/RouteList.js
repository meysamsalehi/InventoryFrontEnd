import HomePage from "./../pages/HomePage";
import AboutUs from "./../pages/AboutUs";
import Profile from "../pages/ProfileUser";
import NotFound from "./../pages/NotFound";
import ProductList from "./../pages/ProductList";
import EditProduct from "./../pages/EditProduct";
const RouteList = [
  { id: 1, element: HomePage, path: "/", name: "صفحه اصلی" },
  { id: 2, element: ProductList, path: "/ProductList", name: "  لیست محصولات" },
  {
    id: 3,
    element: EditProduct,
    path: "/EditProduct/:id",
    name: "ویرایش محصول",
    isShow: false,
  },
  { id: 4, element: AboutUs, path: "/AboutUs", name: "درباره ما" },
  { id: 5, element: Profile, path: "/Profile", name: "پروفایل" },
  { id: 6, element: NotFound, path: "*", name: "404", isShow: false }, //for 404 not found
];

export default RouteList;
