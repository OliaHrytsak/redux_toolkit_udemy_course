import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart_slice";

const ProductItem = (props) => {
  const { id, title, price, quantity, totalPrice, description } = props;
  const dispatch = useDispatch();

  const addItemFromShop = () => {
    dispatch(cartActions.addItemToCart({ id, title, price, quantity, totalPrice}));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemFromShop}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
