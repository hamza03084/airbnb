import React from "react";
import { array1, array2, array3, array4 } from "../array";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Products({ product, setProduct }) {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <div className="row">
        {product === "pro1" &&
          array1?.map((item) => {
            return (
              <div className="main-card col col-lg-3 col-lg-4 col-sm-12">
                <div className="card1">{item.image}</div>
                <div className="card-text">
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row">
        {product === "pro2" &&
          array2?.map((item) => {
            return (
              <div className="main-card col col-lg-3 col-lg-4 col-sm-12">
                <div className="card1">{item.image}</div>
                <div className="card-text">
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row">
        {product === "pro3" &&
          array3?.map((item) => {
            return (
              <div className="main-card col col-lg-3 col-lg-4 col-sm-12">
                <div className="card1">{item.image}</div>
                <div className="card-text">
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="row">
        {product === "pro4" &&
          array4?.map((item) => {
            return (
              <div className="main-card col col-lg-3 col-lg-4 col-sm-12">
                <div className="card1">{item.image}</div>
                <div className="card-text">
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>
              </div>
            );
          })}
      </div>

      <Navbar bg="light" fixed="bottom" expand="lg">
        <Container>
          <Navbar.Brand>
            © 2022 Airbnb, Inc. ·Privacy ·Terms ·Sitemap ·Destinations
          </Navbar.Brand>
          <Navbar.Toggle />
        </Container>
      </Navbar>
    </div>
  );
}

export default Products;
