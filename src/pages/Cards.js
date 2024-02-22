import React, { useEffect } from "react";
function Cards(props) {
  const { img, pName, disc, price } = props.item;

  return (
    <div className="item addtocart">
      <div className="image">
        <img className="cartimage" src={img} />
      </div>
      <div className="content">
        <div className="heading reveal">{pName}</div>
        <div className="discription">
          <p className="para reveal">{disc}</p>
        </div>
        <div className="price reveal">${price}</div>
        <button
          className="addto adding reveal"
          onClick={() => {
            props.addedClicked(props.item);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Cards;
