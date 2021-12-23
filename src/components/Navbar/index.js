import React from "react";
import logo from '../../assets/Hulm_cloud.png';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
import { Button } from "../Button";
import { Container, Navbar } from "react-bootstrap";

export const NavbarContainer = () => {
  return (
    <Navbar expand="lg" variant="light" bg="white">
  {/* <Container> */}
    <Navbar.Brand href="#">
      <div className="col">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              width={80}
              height={100}
              className="d-inline-block align-top"
              alt=""
              />
          </a>
        </div>
    </Navbar.Brand>
        <div className="col d-flex justify-content-around">
        <div className="dropdown">
          Services
      </div>
      <div>Apps</div>
      <div>pricing</div>
        </div>
        <div className="col d-flex justify-content-around align-items-center">
            <img src={user} width={25} height={25} />
            <Button title={"LET'S TRY"} size="button-sm" />
            <img src={cart} width={50} height={50} />
        </div>
  {/* </Container> */}
</Navbar>
  );
};
{/* <a className="navbar-brand" href="#">
<img
src={logo}
width={80}
    height={100}
    className="d-inline-block align-top"
    alt=""
  />
</a> */}

// // <nav className="navbar navbar-light bg-white">
//     // {/* <div className="col">
//       <a className="navbar-brand" href="#">
//         <img
//           src={logo}
//           width={80}
//           height={100}
//           className="d-inline-block align-top"
//           alt=""
//         />
//       </a>
//     </div>
//     <div className="col-5 d-flex justify-content-around">
//     <div className="dropdown">
//       Services
//   </div>
//   <div>Apps</div>
//   <div>pricing</div>
//     </div>
//     <div className="col d-flex justify-content-around align-items-center">
//         <img src={user} width={25} height={25} />
//         <Button title={"LET'S TRY"} size="button-sm" />
//         <img src={cart} width={50} height={50} />
//     </div> */}
// {/* </nav> */}