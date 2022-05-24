import { INCREASE, DECREASE } from "./productTypes";

const initialState = [
  { title: "لپ تاپ ایسوس", category: "mobile", id: 1, quantity: 1 },
  { title: "گوشی هوشمند سامسونگ", category: "mobile", id: 2, quantity: 1 },
  { title: "هندزفری", category: "web", id: 3, quantity: 1 },
];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      // return { ...state, quantity: state.quantity + action.payload };
      const indexIncrement = state.findIndex((p) => p.id === action.id);
      const productIncrement = { ...state[indexIncrement] };
      productIncrement.quantity++;
      const productUpdatedIncrement = [...state];
      productUpdatedIncrement[indexIncrement] = productIncrement;
      return productUpdatedIncrement;
    case DECREASE:
      // return { ...state, quantity: state.quantity - action.payload };
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const productUpdated = [...state];
        productUpdated[index] = product;
        return productUpdated;
      }
    case "ADD":
      return [...state, action.values];
    case "CHANGE":
      const indexChange = state.findIndex((p) => p.id === action.id);
      const productChange = { ...state[indexChange] };
      productChange.title = action.values.title;
      productChange.quantity = action.values.quantity;
      productChange.category = action.values.category;
      const productUpdatedChange = [...state];
      productUpdatedChange[indexChange] = productChange;
      return productUpdatedChange;
    case "REMOVE":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    default:
      return state;
  }
};

export default productReducer;
