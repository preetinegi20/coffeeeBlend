// import bsOne from "../images/CoffeeBestSeller/pexels-feyza-yıldırım-12252713.jpg";
// import bsTwo from "../images/CoffeeBestSeller/pexels-gül-işık-2615323 (1).jpg";
// import bsThree from "../images/CoffeeBestSeller/pexels-polina-kovaleva-5430755.jpg";
// import bsFour from "../images/CoffeeBestSeller/pexels-song-kaiyue-5646169.jpg";
import list from "../component/Data";
import { useEffect } from "react";
import Cards from "./Cards";
function BestCSeller(props) {
  return (
    <>
      <section className="maincontainersixth">
        <div className="topcontainer">
          <div className="top-main-container">
            <div className="firstcontainer">
              <div className="contents ">
                <div className="heading">
                  <div
                    style={{ color: "rgb(215, 167, 103)" }}
                    className="top reveal"
                  >
                    Discover
                  </div>
                  <h1 className="bottom reveal">BEST COFFEE SELLERS</h1>
                </div>
                <div className="discription reveal">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
            <div className="secondcontainer">
              <div className="container AllcartItem">
                {list.map((item) => (
                  <Cards
                    item={item}
                    key={item.id}
                    addedClicked={props.addedClicked}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default BestCSeller;
