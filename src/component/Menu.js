import Com from "../pages/Com";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";
import Courses2 from "../pages/Courses2";
import Ss from "../pages/Ss";
import { useEffect, useState } from "react";
// import itemList from "../pages/itemList";

function Menu(props) {
  // let styleDownElements = {
  //   width: " 100%",
  //   position: "relative",
  //   height: "19rem",
  //   marginTop: "-18.9rem",
  //   overflowY: "hidden",
  // };

  let itemList = [
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
    {
      itemName: "",
      disc: "",
      item: `${require("../images/items/3f4cb32e87ea49779b9b9290705f3edd.jpg")}`,
    },
    {
      itemName: "",
      disc: "",
      item: "",
    },
  ];
  let bgImage = [
    {
      bgImg: `${require("../images/bg/wall6.jpeg")}`,
      name: "MENU",
    },
  ];
  useEffect(() => {
    let drop = document.getElementsByClassName("secondOne")[0];
    drop.classList.add("drop");
    let addednewDrop = document.getElementsByClassName("downitems")[0];
    let firstNewone = document.getElementsByClassName("firstOne")[0];
    firstNewone.classList.add("firstNewone");
    addednewDrop.children[0].classList.add("addednewDrop");
    let ff = document.getElementsByClassName("downitems")[0].children;
    ff[0].classList.add("addeddrop");
    document
      .getElementsByClassName("subcontainer")[0]
      .children[0].classList.add("firstTop");
    document
      .getElementsByClassName("downitems")[0]
      .children[0].children[0].children[1].classList.add("seconddrop");
  });
  return (
    <div className="container">
      <Ss pass={bgImage} />

      <div className="downitems">
        <div className="container">
          <Contact />
        </div>
      </div>

      <div className="menusection" id="#menuvisible">
        <div className="topcontainer">
          <div className="maincontainer">
            <div className="cont containerone ">
              <div className="heading">
                <h1>STARTER</h1>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">beer-brown-sugar</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cont containertwo ">
              <div className="heading">
                <h1>MAIN DISH</h1>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">beer-brown-sugar</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cont containerthree ">
              <div className="heading">
                <h1>DRINKS</h1>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">beer-brown-sugar</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cont containerfour ">
              <div className="heading">
                <h1>DESERT</h1>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">beer-brown-sugar</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item reveal revealx">
                <div className="image">
                  <img src={itemList[0].item} />
                </div>
                <div className="content">
                  <div className="text">
                    <h5 className="name">Bacon & Cheeze</h5>
                    <div className="price">
                      <h5>$54.33</h5>
                    </div>
                  </div>
                  <div className="discribtion">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Courses
        main={props.main}
        drinks={props.drinks}
        dessert={props.dessert}
        handleDessert={props.handleDessert}
        handleDrinks={props.handleDrinks}
        handleMain={props.handleMain}
        addedClicked={props.addedClicked}
      />
      <Courses2
        addedClicked={props.addedClicked}
        mainS={props.mainS}
        drinksS={props.drinksS}
        dessertS={props.dessertS}
        handleDessertS={props.handleDessertS}
        handleDrinksS={props.handleDrinksS}
        handleMainS={props.handleMainS}
      />

      <Com />
    </div>
  );
}

export default Menu;
