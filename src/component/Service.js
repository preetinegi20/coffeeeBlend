import Benefits from "../pages/Benefits";
import Com from "../pages/Com";
import Ss from "../pages/Ss";
function Service() {
  let bgImage = [
    {
      bgImg: `${require("../images/bg/wall4.jpeg")}`,
      name: "SERVICE",
    },
  ];
  return (
    <div className="container">
      <Ss pass={bgImage} />
      <Benefits />
      <Com />
    </div>
  );
}
export default Service;
