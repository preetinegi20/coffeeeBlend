function Contact(props) {
  let bgImage = [
    {
      bgImg: `${require("../images/bg/wall4.jpeg")}`,
      name: "SERVICE",
    },
  ];
  return (
    <>
      <div className="subcontainer">
        <div className="firstOne">
          <div className="item">
            <i className="fa-solid fa-phone"></i>
            <h3>000 (123) 456 7890</h3>
            <p>A small river named Duden flows by their place and supplies.</p>
          </div>

          <div className="item">
            <i className="fa-solid fa-location-crosshairs"></i>
            <h3>198 West 21th Street</h3>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>

          <div className="item">
            <i className="fa-solid fa-clock"></i>
            <h3>Open Monday to Friday</h3>
            <p>8:00am - 9:00pm</p>
          </div>
        </div>

        <div className="secondOne">
          <h1>Book a Table</h1>
          <form>
            <div className="row1 row">
              <div className="col1 wd">
                <div className="firstName">
                  <input type="text" id="fn" placeholder="First Name" />
                </div>
              </div>

              <div className="col2 wd">
                <div className="lastName">
                  <input type="text" id="ln" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div className="row2 row">
              <div className="col1 wdd">
                <div clss="date">
                  <input type="date" id="dt" placeholder="Date" />
                </div>
              </div>

              <div className="col2 wdd">
                <div className="time">
                  <input type="text" id="tm" placeholder="Time" />
                </div>
              </div>

              <div className="col3 wdd">
                <div className="phone">
                  <input type="text" id="pn" placeholder="Phone" />
                </div>
              </div>
            </div>

            <div className="row3 row">
              <div className="col1 wd">
                <div className="message">
                  <textarea
                    cols="30"
                    row="1"
                    className="msg"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col2 wd">
                <div className="submit">
                  <input type="submit" className="sub" value="Appointments" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
