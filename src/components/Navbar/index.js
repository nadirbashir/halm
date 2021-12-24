import React from "react";
import logo from '../../assets/Hulm_cloud.png';
import user from '../../assets/user.png';
import cart from '../../assets/shopping-cart.png';
import { Button } from "../Button";
import { Container, Navbar } from "react-bootstrap";

export const NavbarContainer = () => {
  return (
    <Navbar expand="lg" variant="light" bg="white">
    <Navbar.Brand href="true">
      <div className="col">
          <div>
            <img
              src={logo}
              width={80}
              height={100}
              className="d-inline-block align-top"
              alt="img"
              />
          </div>
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
            <img src={user} width={25} height={25} alt="image" />
            <Button title={"LET'S TRY"} size="button-sm" />
            <img src={cart} width={50} height={50} />
        </div>
</Navbar>
  );
};