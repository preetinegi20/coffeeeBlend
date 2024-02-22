import { useEffect, useState } from "react";
import { gsap, Power0 } from "gsap";
import list2 from "../component/Data2";
import list3 from "../component/Data3";
import list4 from "../component/Data4";

function Courses(props) {
  // const hideList = () => {
  //   let s = document.querySelectorAll("#diactive");
  //   s.style.display = "none";
  //   console.log(document.querySelectorAll("#diactive"));
  // };
  return (
    <>
      <section className="maincontainereight">
        <div className="topcontainer">
          <div className="subcontainer">
            <div className="containerone">
              <div className="item">
                <div className="content">
                  <div className="heading">
                    <div className="disc reveal">
                      <h3>Discover</h3>
                    </div>
                    <div className="menu reveal">
                      <h3>OUR PRODUCTS</h3>
                    </div>
                  </div>

                  <div>
                    <p className="reveal">
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
                    onClick={() => props.handleMain()}
                    className="btnone tapbtn main active-style-bg-col reveal"
                    id={props.main ? "setBg" : ""}
                  >
                    Main Dish
                  </button>
                  <button
                    onClick={() => props.handleDessert()}
                    className="typetwo tapbtn dessert itemListActive reveal"
                    id={props.dessert ? "setBg" : ""}
                  >
                    Desserts
                  </button>
                  <button
                    onClick={() => props.handleDrinks()}
                    className="typethree tapbtn drinks itemListActive reveal"
                    id={props.drinks ? "setBg" : ""}
                  >
                    Drinks
                  </button>
                </div>
              </div>

              <div className="containeritems containeritems-one">
                <div
                  className="itemcontainerone containered AllcartItem"
                  id={props.main ? "active" : "hide"}
                >
                  {list2
                    .filter((item) => item.id <= 7)
                    .map((item) => (
                      <div className="item addtocart">
                        <div className="img image">
                          <img className="cartimage" src={item.img} />
                        </div>
                        <div className="content reveal">
                          {" "}
                          <div className="name heading">{item.pName}</div>{" "}
                          <div className="discribtion">
                            <p className="para">{item.disc}</p>
                          </div>{" "}
                          <div className="price">{item.price}</div>{" "}
                          <div
                            className="add addto adding reveal"
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
                  className="itemcontainertwo containered AllcartItem"
                  id={props.dessert ? "active" : "hide"}
                >
                  {list3
                    .filter((item) => item.id <= 13)
                    .map((item) => (
                      <div className="item addtocart">
                        <div className="img image">
                          <img className="cartimage" src={item.img} />
                        </div>
                        <div className="content reveal">
                          {" "}
                          <div className="name heading">{item.pName}</div>{" "}
                          <div className="discribtion">
                            <p className="para">{item.disc}</p>
                          </div>{" "}
                          <div className="price">{item.price}</div>{" "}
                          <div
                            className="add addto adding reveal"
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
                  className="itemcontainerthree containered AllcartItem"
                  id={props.drinks ? "active" : "hide"}
                >
                  {list4
                    .filter((item) => item.id <= 23)
                    .map((item) => (
                      <div className="item addtocart">
                        <div className="img image">
                          <img className="cartimage" src={item.img} />
                        </div>
                        <div className="content reveal">
                          {" "}
                          <div className="name heading">{item.pName}</div>{" "}
                          <div className="discribtion">
                            <p className="para">{item.disc}</p>
                          </div>{" "}
                          <div className="price">{item.price}</div>{" "}
                          <div
                            className="add addto adding reveal"
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
export default Courses;
