import Com from "../pages/Com";
import Ss from "../pages/Ss";
function Contact() {
  let bgImage = [
    {
      bgImg: `${require("../images/bg/wall6.jpeg")}`,
      name: "Contact Us",
    },
  ];
  return (
    <div className="container">
      <Ss pass={bgImage} />
      <section class="topcontainer">
        <div class="contactsection">
          <div class="itemone">
            <div class="item">
              <div>Contact information</div>
            </div>
            <div class="item">
              <p>
                Address:{" "}
                <span class="only">
                  198 West 21th Street, Suite 721 New York NY 10016
                </span>
              </p>
            </div>
            <div class="item">
              <a href="#">
                Phone: <span>+1235 2355 98</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                Email: <span> info@yoursite.com</span>
              </a>
            </div>
            <div class="item">
              <a href="#">
                Websites: <span>yoursite.com</span>
              </a>
            </div>
          </div>

          <div class="itemtwo">
            <div class="rowone">
              <div class="forname">
                <input
                  type="text"
                  id="ttt"
                  class="same"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="formail">
                <input
                  type="mail"
                  id="ttt"
                  class="same"
                  name="mail"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div class="rowtwo">
              <div class="forsub">
                <input
                  type="text"
                  id="t"
                  class="same"
                  name="sub"
                  placeholder="Subject"
                />
              </div>
              <div class="formsg">
                <textarea
                  row="1"
                  id="t"
                  class="same"
                  cols="2"
                  placeholder="Message"
                />
                <textarea />
              </div>
            </div>
            <a href="#">
              <div class="submit">
                <input type="submit" value="Send message" />
              </div>
            </a>
          </div>
        </div>
      </section>
      <Com />
    </div>
  );
}
export default Contact;
