import { combineReducers } from "redux";
import productReducer from "./product/productReducer";
import categoryReducer from "./category/categoryReducer";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
});

export default rootReducer;
