import React, { useState } from "react";
import list2 from "../component/Data2";
import list3 from "../component/Data3";
import list4 from "../component/Data3";

function Courses2(props) {
  return (
    <>
      <section className="maincontainereight">
        <div className="topcontainer">
          <div className="subcontainer">
            <div className="containerone reveal">
              <div className="item">
                <div className="content">
                  <div className="heading reveal revealy">
                    <div className="disc">
                      <h3>Discover</h3>
                    </div>
                    <div className="menu">
                      <h3>OUR PRODUCTS</h3>
                    </div>
                  </div>

                  <div>
                    <p className="reveal revealy">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="containertwo">
              <div className="topheader">
                <div className="container">
                  <button
                    onClick={() => props.handleMainS()}
                    className="btnone tapbtn props.main active-style-bg-col"
                    id={props.mainS ? "setBg" : ""}
                  >
                    main Dish
                  </button>
                  <button
                    onClick={() => props.handleDessertS()}
                    className="typetwo tapbtn props.dessert itemListActive"
                    id={props.dessertS ? "setBg" : ""}
                  >
                    desserts
                  </button>
                  <button
                    onClick={() => props.handleDrinksS()}
                    className="typethree tapbtn props.drinks itemListActive"
                    id={props.drinksS ? "setBg" : ""}
                  >
                    drinks
                  </button>
                </div>
              </div>

              <div className="containeritems containeritems-two">
                <div
                  className="itemcontainerone firstContainer containered AllcartItem"
                  id={props.mainS ? "atv" : "hd"}
                >
                  {list2.map((item) => (
                    <div className="item addtocart">
                      <div className="img image">
                        <img className="cartimage" src={item.img} />
                      </div>
                      <div className="content  reveal revealy">
                        {" "}
                        <div className="name heading">{item.pName}</div>{" "}
                        <div className="discribtion">
                          <p className="para">{item.disc}</p>
                        </div>{" "}
                        <div className="price">{item.price}</div>{" "}
                        <div
                          className="add addto adding"
                          onClick={() => {
                            props.addedClicked(item);
                          }}
                        >
                          Add to cart
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="itemcontainertwo secondContainer containered AllcartItem"
                  id={props.dessertS ? "atv" : "hd"}
                >
                  {list3.map((item) => (
                    <div className="item addtocart">
                      <div className="img image">
                        <img className="cartimage" src={item.img} />
                      </div>
                      <div className="content  reveal revealy">
                        {" "}
                        <div className="name heading">{item.pName}</div>{" "}
                        <div className="discribtion">
                          <p className="para">{item.disc}</p>
                        </div>{" "}
                        <div className="price">{item.price}</div>{" "}
                        <div
                          className="add addto adding"
                          onClick={() => {
                            props.addedClicked(item);
                          }}
                        >
                          Add to cart
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="itemcontainerthree thirdContainer containered AllcartItem"
                  id={props.drinksS ? "atv" : "hd"}
                >
                  {list4.map((item) => (
                    <div className="item addtocart">
                      <div className="img image">
                        <img className="cartimage" src={item.img} />
                      </div>
                      <div className="content reveal revealy">
                        {" "}
                        <div className="name heading">{item.pName}</div>{" "}
                        <div className="discribtion">
                          <p className="para">{item.disc}</p>
                        </div>{" "}
                        <div className="price">{item.price}</div>{" "}
                        <div
                          className="add addto adding"
                          onClick={() => {
                            props.addedClicked(item);
                          }}
                        >
                          Add to cart
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses2;
