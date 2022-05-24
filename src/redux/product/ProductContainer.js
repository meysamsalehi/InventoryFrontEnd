import { useSelector, useDispatch } from "react-redux";
import { increaseProduct, decreaseProduct } from "./productAction";

const ProductContainer = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(product);

  return (
    <div>
      {product.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.title} is {product.quantity}
            </h2>
            <button onClick={() => dispatch(increaseProduct(product.id))}>+</button>
            <button onClick={() => dispatch(decreaseProduct(product.id))}>-</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductContainer;
