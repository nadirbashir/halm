import { NavbarContainer } from "./components/Navbar";
import Layout from "./Layout";
import kiss from "./assets/kisspng-point-of-sale-computer-software-laptop-touchscreen-cr-abitare-srl-5b18de671d7323.6621971315283564551206.png";
import playWhite from "./assets/play_WHITE.png";
import implement from "./assets/implement - White.png";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
const App = () => {
  return (
    <div className="app">
      <NavbarContainer />
      <div className="skew">
        <Layout>
          <div className="row font-white section">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <h2 className="mg-bottom">
                Carry your Office <br /> Anytime and
                <br /> Everywhere you go
              </h2>
              <p className="mg-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                <br />
                industry. Lorem Ipsum when an unknown printer took a galley of
                type
                <br /> and scrambled it to make a type specimen book.
              </p>
              <div className="d-flex align-items-center">
                <Button title="Start Now" size="button-m theme-dark" />
                <div style={{ padding: "0 20px" }}>
                  <img src={playWhite} width={30} height={30} alt="..." />
                </div>
                <h6>Watch how it works.</h6>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="land-image">
                <img className="kiss-image" src={kiss} alt="kiss..." />
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="row section" style={{ marginTop: "200px" }}>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div>
                <h2 className="mg-bottom">
                  ERP Systems <br />
                  in today's world
                </h2>
                <p className="mg-bottom">
                  Lorem Ipsum is simply dummy text of the printing <br /> and
                  typesetting industry. Lorem Ipsum when an <br /> unknown printer took
                  a galley of type and scrambled <br /> it to make a type specimen
                  book.Lorem Ipsum is <br /> simply dummy text of the printing and
                  typesetting <br /> industry. Lorem Ipsum when an unknown printer took <br />
                  a galley of type and scrambled it to make a type <br /> specimen book
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between">
              <div className="col-12 col-lg-6 col-md-6 col-sm-12">
                <Card image={implement} theme="theme-dark" />
                <Card image={implement} theme="theme-light" />
              </div>
              <div className="col-12 col-lg-6 col-md-6 col-sm-12" style={{ marginTop: "100px" }}>
                <Card image={implement} theme="theme-light" />
                <Card image={implement} theme="theme-dark" />
              </div>
            </div>
          </div>

          <div className="row mg-bottom">
            <div className="col mg-top center mg-bottom heading-section">
              <h2 className="theme-heading">APPLICATION FOR</h2>
              <h4>EVERY NEED</h4>
            </div>
          </div>
          {/* footer */}
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 footer theme-dark mg-bottom mg-top">
            <div className="col col-lg-2 mg-bottom">
              <h5>
                Hulm Solutions
              </h5>
            </div>
            <div className="col col-lg-2 mg-bottom">
              <h5>Link</h5>
              <p>
                <a href="true">Home</a>
              </p>
              <p>
                <a href="true">Features</a>
              </p>
              <p>
                <a href='true'>Testimonials</a>
              </p>
            </div>
            <div className="col col-lg-2 mg-bottom">
              <h5>Support</h5>
              <p>
                <a href='true'>About Us</a>
              </p>
              <p>
                <a href='true'>Terms of Use</a>
              </p>
              <p>
                <a href='true'>Privacy Policy</a>
              </p>
            </div>
            <div className="col mg-bottom">
              <h5>Contact Us</h5>
              <p>+801125309442</p>
              <p>info@Restaurant.com</p>
              <p>Doudkandi, Comala</p>
            </div>
            <div className="col mg-bottom">
              <h5>Follow</h5>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Doudkandi, Comala</p>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
