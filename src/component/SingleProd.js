import { useEffect } from "react";
import BestCSeller from "../pages/BestCSelller";
import Ss from "../pages/Ss";
import Singprod from "../pages/Singprod";
import Com from "../pages/Com";
function SingleProd(props) {
  let prodDetailsBG = [
    {
      bgImg: `${require("../images/bg/wall6.jpeg")}`,
      name: "PRODUCT DETAILS",
    },
  ];
  useEffect(() => {
    document.getElementsByClassName("bottom")[0].innerText = "RELATED PRODUCTS";
  });
  return (
    <>
      <Ss pass={prodDetailsBG} />
      <Singprod addedClicked={props.addedClicked} qntChange={props.qntChange} />
      <BestCSeller
        addedClicked={props.addedClicked}
        // selectedItem={props.item}
      />

      <Com />
    </>
  );
}
export default SingleProd;
