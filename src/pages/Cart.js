import { useEffect, useState } from "react";
import Ss from "../pages/Ss";
import AddItems from "./AddItems";
import BestCSeller from "./BestCSelller";
import CartItems from "./CartItems";
function Cart(props) {
  let [TotalAmt, setTotalAmt] = useState(0);
  props.showtheCart();
  let bgImage = [
    {
      bgImg: `${require("../images/bg/pexels-photo-3846220.jpeg")}`,
      name: "CART",
    },
  ];
  return (
    <>
      <Ss pass={bgImage} />
      {props.passCart ? (
        <div className="cartContainer">
          <div className="container">
            <div className="tableContainer" style={{ overflowX: "scroll" }}>
              <table>
                <div className="tContainer">
                  <thead className="cartHeader">
                    <tr>
                      <th></th>
                      <th></th>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <CartItems
                    item={props.item}
                    cart={props.cart}
                    // rowTotal={props.setrowTotal}
                    total={setTotalAmt}
                    setCart={props.setCart}
                    qntChange={props.qntChange}
                  />
                </div>
              </table>
            </div>
            <div className="total">
              <div className="total-amt">
                <div className="text heading">CARD TOTAL</div>
                <div className="text">
                  <span>SubTotal</span>
                  <span>${TotalAmt}</span>
                </div>
                <div className="text">
                  <span>Discount</span>
                  <span className="dscnt">$200</span>
                </div>
                <div className="text">
                  <span>Delivery</span>
                  <span>$00.0</span>
                </div>
                <div className="text">
                  <span>Total</span>
                  <span className="sub subTtl">${TotalAmt}</span>
                </div>
              </div>
              <div className="checkout">
                <a href="#">Proceed To Checkout</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AddItems />
      )}
    </>
  );
}
export default Cart;
