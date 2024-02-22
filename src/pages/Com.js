import ft1 from "../images/items/pexels-valeria-boltneva-1833332.jpg";
import ft2 from "../images/items/pexels-jer-chung-2059151.jpg";
function Com() {
  return (
    <>
      <div>
        <footer>
          <div class="maincontainer">
            <div class="subcontainer">
              <div class="containerone cont">
                <div class="heading forwhite">ABOUS US</div>
                <div class="discribtion">
                  <p class="forgrey reveal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    in at quasi eveniet tempora sequi blanditiis veritatis ipsum
                    sint quisquam?
                  </p>
                </div>
                <div class="iconone ">
                  <a href="#" class="reveal">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" class="reveal">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" class="reveal">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>

              <div class="containertwo cont">
                <div class="heading forwhite">RECENT BLOG</div>
                <div class="item">
                  <div class="img">
                    <img src={ft1} />
                  </div>
                  <div class="discribtion">
                    <a href="#">
                      <p class="forwhite size reveal">
                        Lorem ipsum dolor sit, Laudantium amet consectetur ipsum
                        dolor .
                      </p>
                      <div class="icons">
                        <p class="forgrey tiny">
                          <i class="fa-solid fa-calendar-days reveal"></i>Sept
                          15,2018 <i class="fa-solid fa-user reveal"></i>Admin{" "}
                          <i class="fa-solid fa-comment reveal"></i>19
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="item">
                  <div class="img">
                    <img src={ft2} />
                  </div>
                  <div class="discribtion">
                    <a href="#">
                      <p class="forwhite size reveal">
                        Lorem ipsum dolor sit, Laudantium, molestiae?
                      </p>
                      <div class="icons">
                        <p class="forgrey tiny reveal ">
                          <i class="fa-solid fa-calendar-days reveal"></i>Sept
                          15,2018
                          <i class="fa-solid fa-user reveal"></i>Admin
                          <i class="fa-solid fa-comment reveal"></i>19
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="containerthree cont">
                <div class="heading forwhite ">SERVICES</div>
                <a href="#" class="forgrey reveal">
                  Cooked
                </a>
                <a href="#" class="forgrey reveal">
                  Delivery
                </a>
                <a href="#" class="forgrey reveal">
                  Quality Foods
                </a>
                <a href="#" class="forgrey reveal">
                  Mixed
                </a>
              </div>
              <div class="containerfour cont">
                <div class="heading forwhite reveal">HAVE A QUESTION?</div>
                <div class="discribtion">
                  <a href="#" class="forgrey ist reveal">
                    <i class="fa-solid fa-map-location-dot ist"></i>
                    222 UTTARAKHAND, DEHRADUN
                  </a>
                </div>
                <a href="#" class="phone forwhite reveal">
                  <i class="fa-solid fa-phone ist"></i>
                  +2 33 422 33 2
                </a>
                <a href="#" class="id forwhite reveal">
                  <i class="fa-solid fa-envelope ist"></i>
                  bonapt@yourmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Com;
