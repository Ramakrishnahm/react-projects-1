import Products from "../products/Products";
import React from "react";
const Store = () => {
  return (
    <>
      <main>
        <form className="store-form">
          <div className="product-section">
            <div>
              <label className="form-label">Search Product</label>
              <input className="form-input1" type="email" />
            </div>
            <div>
              <label className="form-label">Select Catergory</label>
              <select name="products" className="form-option">
                <option value="all">all</option>
                <option value="tables">Tables</option>
                <option value="kids">Kids</option>
                <option value="chairs">Chairs</option>
              </select>
            </div>
            <div>
              <label className="form-label">Select Company</label>
              <select name="companies" className="form-option">
                <option value="all">all</option>
                <option value="modenza">Modenza</option>
                <option value="comfora">Comfora</option>
                <option value="luxora">Luxora</option>
              </select>
            </div>
            <div>
              <label className="form-label">Sort by</label>
              <select name="companies" className="form-option">
                <option value="all">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">High</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
          <div className="product-section">
            <div>
              <label className="form-label" for="points">
                Select Price
              </label>
              <input type="range" id="points" name="points" min="0" max="10" />
            </div>
            <div>
              <label className="form-label">Free Shipping</label>
              <input
                type="checkbox"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>
              <button className="form-btn searchbtn " type="submit">
                search
              </button>
            </div>
            <div>
              <button className="form-btn resetbtn " type="submit">
                reset
              </button>
            </div>
          </div>
        </form>
      </main>
      <Products />
    </>
  );
};
export default Store;
