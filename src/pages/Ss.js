import { NavLink } from "react-router-dom";

function Ss(props) {
  return (
    <>
      <div className="maincontainerFirst">
        <div className="ContainerMenu">
          <div
            className="item"
            style={{ backgroundImage: ` url(${props.pass[0].bgImg}) ` }}
          >
            {/* <!-- <img src="/imgs/pexels-dmitriy-ganin-7538070.jpg"> --> */}
            <div className="content">
              <h1>{props.pass[0].name}</h1>
              <div className="btn">
                <p>
                  <NavLink to="/" className="button1 bt">
                    HOME
                  </NavLink>
                </p>
                <p className="button2 bt">{props.pass[0].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ss;
