import { useEffect } from "react";

function CartIcon(props) {
  return (
    <>
      <div className="cart-container">
        <i class="fa-solid fa-cart-shopping"></i>
        <span>{props.ipass}</span>
      </div>
    </>
  );
}
export default CartIcon;
