import React from "react";
import Ss from "../pages/Ss";
import Com from "../pages/Com";
function Checkout() {
  let bgImage = [
    {
      bgImg: `${require("../images/bg/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg")}`,
      name: "CONTACT US",
    },
  ];
  return (
    <div>
      <Ss pass={bgImage} />

      <Com />
    </div>
  );
}
export default Checkout;
