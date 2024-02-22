import React, { useEffect, useState } from "react";
import list4 from "../component/Data4";
function Singprod(props) {
  let [ppValue, setPpValue] = useState(24.32);
  // let [ttsingle, setTtsingle] = useState(24.32);
  let [count, setCount] = useState(1);
  // let [ne, setnew] = useState();
  let totalamtofsingleprod;
  // let qntChange = (i, item) => {
  //   item.quant = item.quant + i;
  //   if (item.quant === 0) item.quant = 1;
  //   setCount(item.quant);
  //   // let ppValue = document.getElementsByClassName("pp")[0].innerText;
  //   item.ttrwpp = item.quant * item.price;
  // };
  // let [selectState, setSelectState] = useState();
  let addto = document.getElementsByClassName("addto")[0];
  // let dropDsize = (item) => {
  //   // let val;
  //   let dropDofSingleProd = document.getElementById("dropDofSingleProd").value;
  //   //  = val;
  //   // console.log(dropDofSingleProd);
  //   if (dropDofSingleProd == "Small") {
  //     item.price = 24.32;
  //     setPpValue(item.price);
  //   } else if (dropDofSingleProd == "Medium") {
  //     item.price = 34.32;
  //     setPpValue(item.price);
  //   } else if (dropDofSingleProd == "Large") {
  //     item.price = 44.32;
  //     setPpValue(item.price);
  //   }
  // };

  return (
    <div className="SinglePoduct-container">
      {list4
        .filter((item) => item.id >= 23)
        .map((item) => (
          <div className="main-container">
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="contentContainer">
              <div className="heading">{item.pName}</div>
              <p className="ppp">
                $<span className="pp">{item.price}</span>
              </p>
              <p className="para">
                <span style={{ display: "block", marginBottom: "1rem " }}>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </span>{" "}
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its P luvs S
                origin would S luvs P be the word "and" and the Little Blind
                Text should turn around and return to its own, safe country. But
                nothing the copy said could convince her and so it didn’t take
                long until a few insidious Copy Writers ambushed her, made her
                drunk with Longe and Parole and dragged her into their agency,
                where they abused her for their.{" "}
              </p>
              <div className="size">
                <select
                  id="dropDofSingleProd"
                  onChange={() => item.dropDsize(setPpValue)}
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>
              <div className="qnt">
                <h4
                  className="qntHandle"
                  onClick={() => item.qntChange(-1, setCount)}
                >
                  -
                </h4>
                <h4 id="singleProdQuantity">{item.quant}</h4>
                <h4
                  className="qntHandle"
                  onClick={() => item.qntChange(+1, setCount)}
                >
                  +
                </h4>
              </div>
              <div
                className="addto"
                onClick={() => {
                  props.addedClicked(item);
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Singprod;
