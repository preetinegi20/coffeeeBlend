import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";
// import BestCSeller from "../pages/BestCSelller";
import logo from "../images/logo/pngwing.com(1).png";
import { useEffect, useState } from "react";
import { gsap, Power1, Power0 } from "gsap";
let NavBar = (props) => {
  // let myyy = {
  //   transition: "all 0.8s ease 0s",
  // };
  useEffect(() => {
    let navbar = document.getElementsByClassName("navbar")[0];
    let prevHeight = window.scrollY;
    window.addEventListener("scroll", () => {
      let currHeight = window.scrollY;
      if (prevHeight > currHeight) {
        gsap.to(navbar, {
          y: "0px",
          ease: Power0.easeInOut,
          duration: 0.2,
        });
      } else {
        gsap.to(navbar, {
          y: "-150px",
          ease: Power0.easeInOut,
          duration: 0.2,
        });
      }
      prevHeight = currHeight;
    });
    // console.log(navbar);
    let shopParent = document.getElementById("shp");
    let subLinks = document.getElementsByClassName("subLinks");
    shopParent.addEventListener("mouseenter", () => {
      gsap.to(subLinks[0], {
        y: "22px",
        ease: Power1.easeIn,
        visibility: "visible",
      });
    });
    shopParent.addEventListener("mouseleave", () => {
      gsap.to(subLinks[0], {
        y: "-10px",
        ease: Power1.easeIn,
        visibility: "hidden",
      });
    });
    let navContainer = document.getElementsByClassName("navContainer")[0];
    let nvbar = navContainer.children[0];
    let nav = navContainer.children[0].children[0].children[1];
    document
      .getElementsByClassName("toggleIcon")[0]
      .addEventListener("click", () => {
        if (nav.style.display === "none") {
          // console.log(navContainer.children[0]);
          // console.log(navContainer.children[0].children[0].children[1]);
          nav.style.display = "flex";
          nvbar.style.height = "100vh";
        } else {
          nav.style.display = "none";
          nvbar.style.height = "8rem";
          nvbar.style.backgroundColor = "black";
        }
      });
  });
  return (
    <div className="mainContainer">
      <div className="navContainer">
        <div className="navbar" id="navBar">
          <ul className="navSection">
            <div className="smallNav">
              <div className="logo">
                <img src={logo} alt="" />
                <p>GoCheww Grill</p>
              </div>
              <div className="toggleIcon">
                <div className="toggle">
                  <div className="l"></div>
                  <div className="l"></div>
                  <div className="l"></div>
                </div>
              </div>
            </div>
            <nav className="navv">
              <li className="navLi">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  HOME
                </NavLink>
              </li>
              <li className="navLi">
                <NavLink
                  to="/menu"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  MENU
                </NavLink>
              </li>
              <li className="navLi">
                <NavLink
                  to="service"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  SERVICE
                </NavLink>
              </li>
              <li className="navLi">
                <NavLink
                  to="/blog"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  BLOG
                </NavLink>
              </li>
              <li className="navLi">
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="navLi shopParent" id="shp">
                <span className="dropOccurs">
                  SHOP{" "}
                  <span>
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </span>
                <div className="subLinks" id="sublinks">
                  <li>
                    <NavLink
                      to="/shop"
                      style={({ isActive }) => ({
                        color: isActive ? "#c49b63" : "#bcb9b9",
                      })}
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/singleProd"
                      style={({ isActive }) => ({
                        color: isActive ? "#c49b63" : "#bcb9b9",
                      })}
                    >
                      Single Product
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/cart"
                      style={({ isActive }) => ({
                        color: isActive ? "#c49b63" : "#bcb9b9",
                      })}
                    >
                      Cart
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/checkout"
                      style={({ isActive }) => ({
                        color: isActive ? "#c49b63" : "#bcb9b9",
                      })}
                    >
                      Checkout
                    </NavLink>
                  </li>
                </div>
              </li>
              <li className="navLi cont">
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  CONTACT
                </NavLink>
              </li>
              <li className="navLi crt">
                <NavLink
                  to="/cart"
                  style={({ isActive }) => ({
                    color: isActive ? "#c49b63" : "#bcb9b9",
                  })}
                >
                  <CartIcon ipass={props.size} />
                </NavLink>
              </li>
            </nav>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
