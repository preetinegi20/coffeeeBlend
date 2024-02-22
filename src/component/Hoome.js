import { NavLink } from "react-router-dom";
import Com from "../pages/Com";
import BestCSeller from "../pages/BestCSelller";
import Disc from "../pages/Disc";
import OurMenu from "../pages/OurMenu";
import Benefits from "../pages/Benefits";
import Info from "../pages/Info";
import Testimony from "../pages/Testimony";
import Contact from "../pages/Contact";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { gsap } from "gsap";
import { Power1 } from "gsap";

import ss1 from "../images/ss/pexels-andrea-piacquadio-3783513.jpg";
import ss2 from "../images/ss/pexels-andrea-piacquadio-3796810.jpg";
import ss3 from "../images/ss/pexels-andrea-piacquadio-925786.jpg";
import ss4 from "../images/ss/pexels-august-de-richelieu-4427813.jpg";
import blg1 from "../images/items/pexels-farhad-ibrahimzade-8697543.jpg";
import blg2 from "../images/items/pexels-jamie-patterson-2532005.jpg";
import blg3 from "../images/items/pexels-lumn-1410235.jpg";
import mp from "../images/items/pexels-rajesh-tp-1633525.jpg";

import { useEffect, useState } from "react";
import Courses from "../pages/Courses";
// import { mapRange } from "gsap-trial/snrc";

let slidersContent = [
  {
    wel: "Welcome",
    head: "",
    subHead: "",
    btn: "Order Now",
    btn2: "View Menu",
  },
  { head: "", subHead: "" },

  { head: "", subHead: "" },

  { head: "", subHead: "" },

  { head: "", subHead: "" },
];
let imageSlider = [
  {
    image: `${require("../images/slider/pexels-chevanon-photography-324028.jpg")}`,
    greet: "Welcome",
    heading: "For People Who Love Coffee",
    disc: "One of the reasons that people enjoy coming to a great restaurant is that when an extraordinary meal is placed in front of them ",
  },
  {
    image: `${require("../images/slider/pexels-lina-kivaka-1879321.jpg")}`,
    greet: "Welcome",
    heading: "Great Ideas Come from Great Coffee",
    disc: "“People who love to eat are always the best people..”",
  },
];

function Hoome(props) {
  let [slide, setSlide] = useState({
    slideZero: true,
    slideOne: false,
    slideTwo: false,
    slideThree: false,
    slideFour: false,
  });

  // let [setbgcol, setnewbgcol] = useState();
  useEffect(() => {
    let slider = document.getElementsByClassName("slider")[0];
    let showSlide = (index) => {
      gsap.to(slider.children[index], {
        duration: 1,
        opacity: 1,
        ease: Power1.ease,
        overflow: "hidden",
      });
    };
    let hideSlide = (index) => {
      gsap.to(slider.children[index], {
        // duration: 1,
        opacity: 0,
        ease: Power1.easeIn,
      });
    };

    setTimeout(() => {
      if (slider.children[0].classList.contains("active")) {
        showSlide(1);
        setSlide({
          slideZero: false,
          slideOne: true,
          slideTwo: false,
          slideThree: false,
          slideFour: false,
        });

        hideSlide(0);
        hideSlide(2);
        hideSlide(3);
        hideSlide(4);
      } else if (slider.children[1].classList.contains("active")) {
        showSlide(2);
        setSlide({
          slideZero: false,
          slideOne: false,
          slideTwo: true,
          slideThree: false,
          slideFour: false,
        });
        hideSlide(1);
        hideSlide(0);
        hideSlide(3);
        hideSlide(4);
      } else if (slider.children[2].classList.contains("active")) {
        showSlide(3);
        setSlide({
          slideZero: false,
          slideOne: false,
          slideTwo: false,
          slideThree: true,
          slideFour: false,
        });
        hideSlide(1);
        hideSlide(2);
        hideSlide(4);
        hideSlide(0);
      } else if (slider.children[3].classList.contains("active")) {
        showSlide(4);
        setSlide({
          slideZero: false,
          slideOne: false,
          slideTwo: false,
          slideFour: true,
          slideThree: false,
        });
        hideSlide(1);
        hideSlide(2);
        hideSlide(3);
        hideSlide(0);
      } else if (slider.children[4].classList.contains("active")) {
        showSlide(0);
        setSlide({
          slideZero: true,
          slideOne: false,
          slideTwo: false,
          slideFour: false,
          slideThree: false,
        });
        hideSlide(1);
        hideSlide(2);
        hideSlide(3);
        hideSlide(4);
      }
    }, 6000);
  });

  return (
    <div className="container">
      <div className="sliderContainer">
        <div className="slider">
          <div id="slide" className={slide.slideZero ? "active" : ""}>
            <div className="image sliderZero bgAdjust">
              <div className="infSection">
                <div class="content">
                  <span class="smallHeading">{slidersContent[0].wel}</span>
                  <h1>Amazing Taste & Beautiful Place</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    doloremque omnis hic.
                  </p>
                </div>
                <ul class="btn">
                  <li
                    id="button1"
                    // className={setbgcol ? "active-bg-col" : "deactive-bg-col"}
                  >
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn}
                    </NavLink>
                  </li>
                  <li id="button2">
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn2}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide" className={slide.slideOne ? "active" : ""}>
            <div className="image sliderOne bgAdjust">
              <div className="infSection">
                <div class="content">
                  <span class="smallHeading">{slidersContent[0].wel}</span>
                  <h1>Amazing Taste & Beautiful Place</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    doloremque omnis hic.
                  </p>
                </div>
                <ul className="btn">
                  <li
                    id="button1"
                    // className={setbgcol ? "active-bg-col" : "deactive-bg-col"}
                  >
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn}
                    </NavLink>
                  </li>
                  <li id="button2 ">
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn2}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide" className={slide.slideTwo ? "active" : ""}>
            <div className="image sliderTwo bgAdjust">
              <div className="infSection">
                <div class="content">
                  <span class="smallHeading">{slidersContent[0].wel}</span>
                  <h1 style={{ zndex: 2 }}>Amazing Taste & Beautiful Place</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    doloremque omnis hic.
                  </p>
                </div>
                <ul class="btn">
                  <li
                    id="button1"
                    // className={setbgcol ? "active-bg-col" : "deactive-bg-col"}
                  >
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn}
                    </NavLink>
                  </li>
                  <li id="button2">
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn2}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide" className={slide.slideThree ? "active" : ""}>
            <div className="image sliderThree bgAdjust">
              <div className="infSection">
                <div class="content">
                  <span class="smallHeading">{slidersContent[0].wel}</span>
                  <h1>Amazing Taste & Beautiful Place</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    doloremque omnis hic.
                  </p>
                </div>
                <ul class="btn">
                  <li
                    id="button1"
                    // className={setbgcol ? "active-bg-col" : "deactive-bg-col"}
                  >
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn}
                    </NavLink>
                  </li>
                  <li id="button2">
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn2}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="slide" className={slide.slideFour ? "active" : ""}>
            <div className="image sliderFour bgAdjust">
              <div className="infSection">
                <div class="content">
                  <span class="smallHeading">{slidersContent[0].wel}</span>
                  <h1>Amazing Taste & Beautiful Place</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    doloremque omnis hic.
                  </p>
                </div>
                <ul class="btn">
                  <li
                    id="button1"
                    // className={setbgcol ? "active-bg-col" : "deactive-bg-col"}
                  >
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn}
                    </NavLink>
                  </li>
                  <li id="button2">
                    <NavLink to="/menu" className="bt">
                      {" "}
                      {slidersContent[0].btn2}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="downitems">
        <div className="container">
          <Contact />
        </div>
      </div>

      <Disc />
      <Benefits />
      <OurMenu addedClicked={props.addedClicked} />

      <Info />
      <BestCSeller
        addedClicked={props.addedClicked}
        selectedItem={props.item}
      />
      <section className="maincontainerseventh">
        <div className="topcontainer">
          <div className="slider">
            <div className="slide imgslide">
              <a href="#">
                <img src={ss1} />
                <div className="iconcontainer">
                  <div className="icon">
                    <div className="ic"></div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="slide imgslide revealy reveal">
              <a href="#">
                <img src={ss2} />
                <div className="iconcontainer">
                  <div className="icon">
                    <div className="ic"></div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="slide imgslide">
              <a href="#">
                <img src={ss3} />
                <div className="iconcontainer">
                  <div className="icon">
                    <div className="ic"></div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </a>
            </div>
            <div className="slide imgslide revealy reveal">
              <a href="#">
                <img src={ss4} />
                <div className="iconcontainer">
                  <div className="icon">
                    <div className="ic"></div>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Courses
        main={props.main}
        drinks={props.drinks}
        dessert={props.dessert}
        handleDessert={props.handleDessert}
        handleDrinks={props.handleDrinks}
        handleMain={props.handleMain}
        addedClicked={props.addedClicked}
      />
      <Testimony />
      <section class="maincontainertenth">
        <div class="topcontainer">
          <div class="container">
            <div class="containerone">
              <div class="content revealy reveal ">
                <div class="heading">
                  <h3>Blogs</h3>
                  <h3>Recent from blog</h3>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texture .
                </p>
              </div>
            </div>

            <div class="containertwo">
              <div class="container">
                <div class="image">
                  <img src={blg1} />
                </div>
                <div class="topcontent">
                  <div class="date">
                    June 8, 2023 Admin <i class="fa-solid fa-comment-dots"></i>3
                  </div>
                  <a>
                    <div class="name">
                      <h3 class="on">The Delicious Pizza</h3>
                    </div>
                  </a>
                </div>
                <div class="discribtion">
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>

              <div class="container">
                <div class="image">
                  <img src={blg2} />
                </div>
                <div class="topcontent">
                  <div class="date">
                    June 8, 2023 Admin <i class="fa-solid fa-comment-dots"></i>5
                  </div>
                  <a>
                    <div class="name">
                      <h3 class="on">The Delicious Pizza</h3>
                    </div>
                  </a>
                </div>
                <div class="discribtion">
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>

              <div class="container">
                <div class="image">
                  <img src={blg3} />
                </div>
                <div class="topcontent">
                  <div class="date">
                    June 8, 2023 Admin <i class="fa-solid fa-comment-dots"></i>9
                  </div>
                  <a>
                    <div class="name">
                      <h3 class="on">The Delicious Pizza</h3>
                    </div>
                  </a>
                </div>
                <div class="discribtion">
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="maincontainereleventh">
        <div class="container ">
          <div class="containerone">
            <img src={mp} />
          </div>

          <div class="containertwo">
            <div class="downitems">
              <div class="container " id="cntr">
                <div class="subcontainer">
                  <div class="secondOne" id="downContainerBottom">
                    <h1>Book a Table</h1>
                    <form>
                      <div class="row1 row">
                        <div class="col1 wd">
                          <div class="firstName">
                            <input
                              type="text"
                              id="fn"
                              placeholder="First Name"
                            />
                          </div>
                        </div>

                        <div class="col2 wd">
                          <div class="lastName">
                            <input
                              type="text"
                              id="ln"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row2 row">
                        <div class="col1 wdd">
                          <div clss="date">
                            <input type="date" id="dt" placeholder="Date" />
                          </div>
                        </div>

                        <div class="col2 wdd">
                          <div class="time">
                            <input type="text" id="tm" placeholder="Time" />
                          </div>
                        </div>

                        <div class="col3 wdd">
                          <div class="phone">
                            <input type="text" id="pn" placeholder="Phone" />
                          </div>
                        </div>
                      </div>

                      <div class="row3 row">
                        <div class="col1 wd">
                          <div class="message">
                            <textarea
                              cols="30"
                              row="1"
                              class="msg"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col2 wd">
                          <div class="submit">
                            <input
                              type="submit"
                              class="sub"
                              value="Appointments"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Com />
    </div>
  );
}
export default Hoome;
