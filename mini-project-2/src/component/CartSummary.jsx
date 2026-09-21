import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartSummary() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price , 0);
  return (<>
    <h2>cart summary</h2>
    <p>total items: {cart.length}</p>
    <p>total price: {totalPrice}</p>

    {cart.length > 0 && (
        <ul>
            {cart.map((item, index) => (
                <li key={item.id + '-' + index}>
                    {item.name} (${item.price})
                </li>
            ))}
        </ul>
    )}
  </>);
}

export default CartSummary;
