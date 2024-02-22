import tt1 from "../images/tt/cheerful-girl-working-coworking-office-260nw-1101992426.webp";
import tt2 from "../images/tt/images.jpg";
import tt3 from "../images/tt//images2.jpg";
import tt4 from "../images/tt/pexels-andrea-piacquadio-3801703.jpg";
import tt5 from "../images/tt/pexels-kampus-production-6605424.jpg";

function Testimony() {
  let pstyle = {
    color: "aliceblue",
  };

  return (
    <>
      <section className="maincontainerninth">
        <div className="topcontainer">
          <div className="container">
            <div className="containerone">
              <div className="content  ">
                <div className="heading">
                  <h3 className="reveal">Testimony</h3>
                  <h3 className="reveal">CUSTOMER SAYS</h3>
                </div>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind
                  texture .
                </p>
              </div>
            </div>

            <div className="containertwo">
              <div className="testimonialContainer">
                <div className="card reveal">
                  <div className="topcontent">
                    <p>
                      “Even the all-powerful Pointing has no control about text
                      by the name.it is an almost unorthographic life the blind
                      texts it is an almost unorthographic life One day however
                      a small.”
                    </p>
                  </div>
                  <div className="bottomcontent">
                    <img src={tt1} />
                    <div className="about">
                      <div className="name">Luise Kelly</div>
                      <p className="revealjob" style={pstyle}>
                        Illustrator Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card too">
                  <div className="topcontent">
                    <p className="reveal">
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name of Lorem
                      Ipsum decided to leave for the far World of Grammar.”
                    </p>
                  </div>
                  <div className="bottomcontent">
                    <img src={tt2} alt="" />
                    <div className="about">
                      <div className="name reveal">Luise Kelly</div>
                      <p classname="revealjob" style={pstyle}>
                        Illustrator Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card reveal">
                  <div className="topcontent">
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however.”
                    </p>
                  </div>
                  <div className="bottomcontent">
                    <img src={tt3} alt="" />
                    <div className="about">
                      <div className="name">Luise Kelly</div>
                      <p classname="revealjob" style={pstyle}>
                        Illustrator Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card too">
                  <div className="topcontent">
                    <p className="reveal">
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name. ”
                    </p>
                  </div>
                  <div className="bottomcontent">
                    <img src={tt4} />
                    <div className="about">
                      <div className="name reveal">Luise Kelly</div>
                      <p classname="revealjob" style={pstyle}>
                        Illustrator Designer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card reveal ">
                  <div className="topcontent">
                    <p>
                      “Even the all-powerful Pointing has no control about the
                      blind texts it is an almost unorthographic life One day
                      however a small line of blind text by the name.it is an
                      almost unorthographic life ”
                    </p>
                  </div>
                  <div className="bottomcontent">
                    <img src={tt5} />
                    <div className="about">
                      <div className="name">Luise Kelly</div>
                      <p classname="revealjob" style={pstyle}>
                        Illustrator Designer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimony;
