import { Navbar } from "./components/Navbar";
import Layout from "./Layout";
import kiss from "./assets/kisspng-point-of-sale-computer-software-laptop-touchscreen-cr-abitare-srl-5b18de671d7323.6621971315283564551206.png";
import playWhite from "./assets/play_WHITE.png";
import implement from "./assets/implement - White.png";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="skew">
        <Layout>
          <div className="row font-white section">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <h2 className="mg-bottom">
                Carry your Office <br/> Anytime and<br/> Everywhere you go
              </h2>
              <p className="mg-bottom">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br />
                industry. Lorem Ipsum when an unknown printer took a galley of
                type<br /> and scrambled it to make a type specimen book.
              </p>
              <div className="d-flex align-items-center">
              <Button title="Start Now" size="button-m theme-dark" />
              <div style={{padding:"0 20px"}}>
                <img src={playWhite} width={30} height={30} />
              </div>
              <h6>Watch how it works.</h6>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">
              <div className="land-image">
                <img className="kiss-image" src={kiss} alt="kissImage" />
              </div>
            </div>
          </div>
          
          {/* section 2 */}
          <div className="row section" style={{marginTop: '200px'}}>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
              <div>
              <h2 className="mg-bottom">
              ERP Systems <br />in today's world
              </h2>
              <p className="mg-bottom">
              Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum when an
                    unknown printer took a galley of type and scrambled
                it to make a type specimen book.Lorem Ipsum is
                          simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum when an unknown printer took
                        a galley of type and scrambled it to make a type
                    specimen book
              </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-between">
              <div>
                <Card image={implement} theme="theme-dark" />
                <Card image={implement} theme="theme-light" /> 
              </div>
              <div style={{marginTop: '100px'}}>
                <Card image={implement} theme="theme-light" /> 
                <Card image={implement} theme="theme-dark" />
              </div>
            </div>
          </div>


          <div class="row mg-bottom">
          <div class="col mg-top center mg-bottom heading-section">
            <h2 class="theme-heading">APPLICATION FOR</h2>
            <h4>EVERY NEED</h4>
          </div>
        </div>
        </Layout>
      </div>
    </div>
  );
};

export default App;
