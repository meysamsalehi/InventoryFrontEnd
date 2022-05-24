import { createStore } from "redux";
import productReducer from "./product/productReducer";

const store = createStore(productReducer);

export default store;
