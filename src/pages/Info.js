import { useEffect, useState } from "react";
// import CountUp from 'react-countup'
function Info() {
  useEffect(() => {
    let incval = document.querySelectorAll(".incval");
    incval.forEach((incv) => {
      let interval = 500;
      let startval = 0;
      let endval = parseInt(incv.children[1].getAttribute("data-target"));
      let duration = Math.floor(interval / endval);
    });
  });

  return (
    <>
      <section className="maincontainerfifth">
        <div className="container">
          <div className="subcontainer counterInc">
            <div className="item incval">
              <div className="icon reveal ">
                <div className="ic"></div>
                <i className="fa-solid fa-shop"></i>
              </div>
              <div className="counter reveal " data-target="150"></div>
              <div className="discription reveal ">Coffee branches</div>
            </div>

            <div className="item incval">
              <div className="icon reveal ">
                <div className="ic"></div>
                <i className="fa-brands fa-shopify"></i>
              </div>
              <div className="counter reveal " data-target="200"></div>
              <div className="discription reveal ">happy customer</div>
            </div>

            <div className="item incval">
              <div className="icon  reveal ">
                <div className="ic"></div>
                <i className="fa-solid fa-medal"></i>
              </div>
              <div className="counter reveal " data-target="100"></div>
              <div className="discription reveal ">Achievements</div>
            </div>

            <div className="item incval reveal ">
              <div className="icon reveal ">
                <div className="ic"></div>
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div className="counter reveal " data-target="300"></div>
              <div className="discription reveal ">Number of staff</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Info;
