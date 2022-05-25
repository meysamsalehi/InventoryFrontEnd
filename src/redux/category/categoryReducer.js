import { ADD_CATEGORY, REMOVE_CATEGORY, EDIT_CATEGORY } from "./categoryTypes";

const initialState = [
  { id: 1, value: "web", label: "وب" },
  { id: 2, value: "mobile", label: "موبایل" },
];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.values];
    case EDIT_CATEGORY:
      const indexChange = state.findIndex((p) => p.id === action.id);
      const productChange = { ...state[indexChange] };
      productChange.title = action.values.title;
      productChange.quantity = action.values.quantity;
      productChange.category = action.values.category;
      const productUpdatedChange = [...state];
      productUpdatedChange[indexChange] = productChange;
      return productUpdatedChange;
    case REMOVE_CATEGORY:
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    default:
      return state;
  }
};

export default categoryReducer;
