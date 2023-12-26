import React from "react";
import { useSelector, } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


// const Cart = (props) => {
//   const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
//   const selectedItems = useSelector((state) => state.cart.items);

//   const itemToShow = selectedItems[0]; // Accessing the first item in the array

//   return (
//     isCartVisible && (
//       <Card className={classes.cart}>
//         <h2>Your Shopping Cart</h2>
//         <ul>
//           {itemToShow && <CartItem key={itemToShow.id} item={itemToShow} />}
//         </ul>
//       </Card>
//     )
//   );
// };

// export default Cart;

const Cart = (props) => {
  const isCartVisible = useSelector((state) => state.ui.cartIsVisible);
  const selectedItems = useSelector((state) => state.cart.items);

  

  return (
    isCartVisible && (
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {selectedItems.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))}
        </ul>
      </Card>
    )
  );
};

export default Cart;