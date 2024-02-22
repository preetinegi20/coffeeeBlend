import Com from "../pages/Com";
import Ss from "../pages/Ss";
function Blog() {
  let blogItem = [
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "The Delicious Pizza",
      para: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "",
      para: "",
    },
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "",
      para: "",
    },
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "",
      para: "",
    },
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "",
      para: "",
    },
    {
      itm: `${require("../images/items/argentinian-beef-empanadas-90268-1.jpeg")}`,
      itmName: "",
      para: "",
    },
  ];

  let bgImage = [
    {
      bgImg: `${require("../images/bg/about.jpg")}`,
      name: "Blog",
    },
  ];
  return (
    <div className="container">
      <Ss pass={bgImage} />
      <section className="maincontainertenth">
        <div className="topcontainer">
          <div className="container">
            <div className="containertwo">
              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>3
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>

              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>5
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>

              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>9
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>

              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>3
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>

              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>5
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>

              <div className="container">
                <div className="image">
                  <img src={blogItem[0].img} />
                </div>
                <div className="topcontent">
                  <div className="date">
                    June 8, 2023 Admin{" "}
                    <i className="fa-solid fa-comment-dots"></i>9
                  </div>
                  <a>
                    <div className="name">
                      <h3 className="on">{blogItem[0].itmName}</h3>
                    </div>
                  </a>
                </div>
                <div className="discribtion">
                  <p>{blogItem[0].para}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Com />
    </div>
  );
}
export default Blog;
