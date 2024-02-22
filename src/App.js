// import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
  Switch,
} from "react-router-dom";
import { gsap, Power3, Power1 } from "gsap";
import "./App.css";
import About from "./component/About";
import Hoome from "./component/Hoome";
import Menu from "./component/Menu";
import Service from "./component/Service";
import Blog from "./component/Blog";
import Shop from "./component/Shop";
import Contact from "./component/Contact";
import Checkout from "./component/Checkout";
import SingleProd from "./component/SingleProd";
import Cart from "./pages/Cart";
import NavBar from "./component/NavBar";

import { useRef, useState, useEffect, useMemo } from "react";
import { counter } from "@fortawesome/fontawesome-svg-core";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  // const [rowTotal, setrowTotal] = useState();
  const [itemPp, setitemPp] = useState();
  const [warning, setWarning] = useState(false);
  useMemo(() => {
    window.addEventListener("scroll", () => {
      // let revealed = document.querySelectorAll(".revealed");
      // let revealed2 = document.querySelectorAll(".revealed2");
      let reveal = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveal.length; i++) {
        let top = reveal[i].getBoundingClientRect().top;
        let rp = 10;
        if (top < window.innerHeight - rp) {
          reveal[i].classList.add("fadeDown");
          // reveal[i].classList.add("reveal-active ");
          // if (reveal[i].classList.contains("revealy")) {
          //   gsap.to(reveal[i], {
          //     opacity: 1,
          //     // ease: Power1.easeInOut,
          //     y: 0,
          //     // duration: 0.5,
          //     // stagger: 0.2,
          //   });
          // } else if (reveal[i].classList.contains("revealx")) {
          //   gsap.to(reveal[i], {
          //     opacity: 1,
          //     // ease: Power1.easeInOut,
          //     x: 0,
          //     // duration: 0.6,
          //     // stagger: 0.2,
          //   });
          // }
          //-----<>>> gsap.to(revealed, {
          //   stagger: 0.2,
          //   // duration: 0.3,
          //   opacity: 1,
          //   y: 0,
          //   ease: Power1.easeInOut,
          // });
        }
      }
    });
  }, []);

  let addedClicked = (item) => {
    let isPresent = false;
    cart.forEach((product, index) => {
      if (item.id === product.id) {
        alert("already added");
        setWarning(true);
        isPresent = true;
      }
    });
    if (isPresent)
      return; //if isPresent is true then we will return it and push cart it.....
    //below i have used the rest parameter for indefinite number of argument as an array
    else {
      setWarning(false);
      setCart([...cart, item]); //we will push the item to the cart array
    }
  };
  function qntChange(item, d) {
    /////////////ui
    let ind = -1;
    let rowtt;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    let addedCart = cart;
    addedCart[ind].quant += d;
    rowtt = addedCart[ind].quant * addedCart[ind].price;
    // rowtt = addedCart[ind].price;
    let rrr = Math.round(rowtt * 100) / 100;
    if (addedCart[ind].quant === 0) {
      addedCart[ind].quant = 1;
    } else {
      if (addedCart[ind].quant <= 7 && addedCart[ind].quant > 0) {
        setCart([...addedCart]);
        addedCart[ind].ttrwpp = rrr;
      } else {
        alert(`"you cannot add more than "${addedCart[ind].quant}`);
      }
    }
    // console.log( parse
    //   `"the current item is: ${addedCart[ind].id}, and its tt price is: ${addedCart[ind].rowTt}"`
    // );
  }

  let showtheCart = () => {
    cart.length > 0 ? setShowCart(true) : setShowCart(false);
  };

  const handleMain = () => {
    setMain(true);
    setDessert(false);
    setDrinks(false);
  };
  const handleDessert = () => {
    setDessert(true);
    setMain(false);
    setDrinks(false);
  };
  const handleDrinks = () => {
    setDrinks(true);
    setMain(false);
    setDessert(false);
  };
  const handleMainS = () => {
    setMainS(true);
    setDessertS(false);
    setDrinksS(false);
  };
  const handleDessertS = () => {
    setDessertS(true);
    setMainS(false);
    setDrinksS(false);
  };
  const handleDrinksS = () => {
    setDrinksS(true);
    setMainS(false);
    setDessertS(false);
  };

  // const [bg, setBg] = useState();
  const [main, setMain] = useState(true);
  const [dessert, setDessert] = useState(false);
  const [drinks, setDrinks] = useState(false);

  const [mainS, setMainS] = useState(true);
  const [dessertS, setDessertS] = useState(false);
  const [drinksS, setDrinksS] = useState(false);

  return (
    <div>
      {/* <BrowserRouter> */}
      <HashRouter basename="/">
        <NavBar size={cart.length} />
        <Routes>
          <Route
            path="/"
            element={
              <Hoome
                addedClicked={addedClicked}
                main={main}
                drinks={drinks}
                dessert={dessert}
                handleDessert={handleDessert}
                handleDrinks={handleDrinks}
                handleMain={handleMain}
                mainS={mainS}
                drinksS={drinksS}
                dessertS={dessertS}
                handleDessertS={handleDessertS}
                handleDrinksS={handleDrinksS}
                handleMainS={handleMainS}
              />
            }
          />
          <Route
            path="/hoome"
            element={
              <Hoome
                addedClicked={addedClicked}
                main={main}
                drinks={drinks}
                dessert={dessert}
                handleDessert={handleDessert}
                handleDrinks={handleDrinks}
                handleMain={handleMain}
                mainS={mainS}
                drinksS={drinksS}
                dessertS={dessertS}
                handleDessertS={handleDessertS}
                handleDrinksS={handleDrinksS}
                handleMainS={handleMainS}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <Menu
                addedClicked={addedClicked}
                main={main}
                drinks={drinks}
                dessert={dessert}
                handleDessert={handleDessert}
                handleDrinks={handleDrinks}
                handleMain={handleMain}
                mainS={mainS}
                drinksS={drinksS}
                dessertS={dessertS}
                handleDessertS={handleDessertS}
                handleDrinksS={handleDrinksS}
                handleMainS={handleMainS}
              />
            }
          />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/about"
            element={<About addedClicked={addedClicked} />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/singleProd"
            element={
              <SingleProd addedClicked={addedClicked} qntChange={qntChange} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                // rowTotal={setrowTotal}
                cart={cart}
                showtheCart={showtheCart}
                passCart={showCart}
                setCart={setCart}
                qntChange={qntChange}
                itemPp={itemPp}
              />
            }
          />
          {/* <Route path="/cartitems" element={<CartItems />}/> */}
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/shop" element={<Shop />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
