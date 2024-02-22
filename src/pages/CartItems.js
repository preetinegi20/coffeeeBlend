import { useEffect, useState } from "react";
function CartItems(props) {
  // let [rwTtl, setrwTtl] = useState(0);
  let ans = 0;
  const subTotal = () => {
    // console.log()
    //   let discPp = 0;
    //  discPp+=props.dP
    props.cart.map((item) => {
      ans += item.quant * item.price;
      props.total(ans);
      // ans2 += item.rowTt * item.price;
      // props.rwTtl(ans2);
    });
  };
  const removeItem = (id) => {
    const arr = props.cart.filter((item) => item.id !== id);
    props.setCart(arr);
  };

  useEffect(() => {
    subTotal();
  });
  return (
    <>
      <tbody className="cartBody">
        {props.cart.map((item) => (
          <tr>
            <td>
              <i
                className="fa-solid fa-xmark"
                onClick={() => removeItem(item.id)}
              ></i>
            </td>
            <td className="addeditemImg">
              <img src={item.img} alt="" />
            </td>
            <td>
              <h5>{item.pName}</h5>
              <p>{item.disc}</p>
            </td>
            <td className="pp">${item.price}</td>
            <td className="incDic">
              <div className="itemPp">
                <span className="inc" onClick={() => props.qntChange(item, +1)}>
                  +
                </span>
                <span className="pp" style={{ textAlign: "center" }}>
                  {item.quant}
                </span>
                <span className="dic" onClick={() => props.qntChange(item, -1)}>
                  -
                </span>
              </div>
            </td>
            <td className=" priceP priceOfRow">{item.ttrwpp}</td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
export default CartItems;
