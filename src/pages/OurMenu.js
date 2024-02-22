import item1 from "../images/items/pexels-malidate-van-849645.jpg";
import item2 from "../images/items/pexels-mew-wy-2910874.jpg";
import item3 from "../images/items/how-to-make-a-latte-at-home.jpg";
import item4 from "../images/items/th.jpg";
import { NavLink } from "react-router-dom";

function OurMenu(props) {
  return (
    <>
      <section className="maincontainerfourth">
        <div className="topcontainer">
          <div className="subcontainer">
            <div className="firstitem ">
              <div className="heading">
                <div className="disc reveal">Discover</div>
                <div className="menu reveal">OUR MENU</div>
              </div>
              <div>
                <p className="reveal">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
              {/* <a>View Full Menu</a> */}
              <NavLink to="/menu" className="navMenu reveal">
                View Full Menu
              </NavLink>
            </div>

            <div className="seconditem">
              <div className="item">
                <img src={item1} style={{ objectPosition: "top" }} />
              </div>
              <div className="item item1">
                <img src={item2} style={{ objectPosition: "bottom" }} />
              </div>
              <div className="item item2">
                <img src={item3} style={{ objectPosition: "top" }} />
              </div>
              <div className="item">
                <img src={item4} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default OurMenu;
