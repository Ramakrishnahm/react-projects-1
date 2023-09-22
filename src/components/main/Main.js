import NavBar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Products from "../products/Products";
import React from "react";
const Main = () => {
  return (
    <React.Fragment>
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
              backgroundColor: "blue",
              border: "none",
              borderRadius: "10px",
            }}
          >
            <Link to="/products">our products</Link>
          </button>
        </div>
        <img
          className="main-pic"
          style={{ width: "300px", height: "350px", borderRadius: "10%" }}
          src="data:image/jpeg;base64,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"
          alt="avatar"
        />
      </div>
      <h1 className="featured-product">Featured Products</h1>
      <Products />
    </React.Fragment>
  );
};
export default Main;
