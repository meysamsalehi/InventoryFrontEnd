import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Test = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product);

  console.log(products);

  return <div>salam</div>;
};

export default Test;
