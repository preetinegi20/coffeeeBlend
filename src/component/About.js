import Com from "../pages/Com";
import Disc from "../pages/Disc";
import Ss from "../pages/Ss";
import Testimony from "../pages/Testimony";
import BestCSeller from "../pages/BestCSelller";
import OurMenu from "../pages/OurMenu";
import Info from "../pages/Info";
function About(props) {
  let bgImage = [
    {
      bgImg: `${require("../images/bg/wall6.jpeg")}`,
      name: "ABOUT",
    },
  ];
  return (
    <div className="container">
      <Ss pass={bgImage} />
      <Disc />
      <Testimony />
      <OurMenu />
      <Info />
      <BestCSeller
        addedClicked={props.addedClicked}
        selectedItem={props.item}
      />
      <Com />
    </div>
  );
}
export default About;
