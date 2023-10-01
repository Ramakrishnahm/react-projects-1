import Products from "../products/Products";
import { useState } from "react";
import React from "react";
const Store = () => {
  const [login, setLogin] = useState({ text: "",catergory : "", companies: "",sort:"", points:"", checkbox:"" });
  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ text: "",catergory : "", companies: "",sort:"", points:"", checkbox:"" });
  }
  return (
    <>
      <main>
        <form className="store-form" onSubmit={handleSubmit}>
          <div className="product-section">
            <div>
              <label className="form-label">Search Product</label>
              <input className="form-input1" type="text" name = "text" onChange={handleChange}/>
            </div>
            <div>
              <label className="form-label">Select Catergory</label>
              <select name="catergory" className="form-option" onChange={handleChange}>
                <option value="all">all</option>
                <option value="tables">Tables</option>
                <option value="kids">Kids</option>
                <option value="chairs">Chairs</option>
              </select>
            </div>
            <div>
              <label className="form-label">Select Company</label>
              <select name="companies" className="form-option" onChange={handleChange}>
                <option value="all">all</option>
                <option value="modenza">Modenza</option>
                <option value="comfora">Comfora</option>
                <option value="luxora">Luxora</option>
              </select>
            </div>
            <div>
              <label className="form-label">Sort by</label>
              <select name="sort" className="form-option" onChange={handleChange}>
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
              <input type="range" id="points" name="points" min="0" max="10"  onChange={handleChange}/>
            </div>
            <div>
              <label className="form-label">Free Shipping</label>
              <input
                type="checkbox" name ='checkbox'
                style={{ width: "20px", height: "20px" }}
                onChange={handleChange}/>
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
