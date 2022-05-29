import axios from "axios";

const initialState = axios.get("http://localhost:3000/products");
console.log("initialState", initialState);

export default initialState;
