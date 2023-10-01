import NavBar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Products from "../products/Products";
import React from "react";
const Main = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="main-comp">
        <div className="main-section">
          <h1 style={{ fontSize: "35px", color: "gray" }}>
            We are changing the way people shop
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "2rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <button
            style={{
              padding: "10px",
              textTransform: "uppercase",
              backgroundColor: "green",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Link to="/products">our products</Link>
          </button>
        </div>
        <img
          className="main-pic"
          style={{ width: "300px", height: "350px", borderRadius: "20px" }}
          src = "https://images.pexels.com/photos/439818/pexels-photo-439818.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="avatar"
        />
      </div>
      <h1 className="featured-product">Featured Products</h1>
      <Products />
    </React.Fragment>
  );
};
export default Main;
