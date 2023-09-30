import { useState } from "react";
const FormSelect = () => {
  const [form, setForm] = useState({
    selectProduct: "",
    selectCompany: "",
    selectCategory: "",
    sortby: "",
    selectPrize: "",
    shipping: "",
  });
  const [options2] = useState(["All", "tables", "chairs", "kids"]);
  const [options1] = useState(["All", "Luxora", "Artifex", "Comfora"]);
  const [options3] = useState(["a-z", "z-a", "A-Z", "Z-A"]);

  const handleChange = (ev) => {
    const { name, value, checked, type } = ev && ev.target;
    setForm((prev) => ({
      ...prev,
      [name]: type == "checkbox" || type == "radio" ? checked : value,
    }));
  };
  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    setForm({
      selectProduct: "",
      selectCompany: "",
      selectCategory: "",
      sortby: "",
      selectPrize: "",
      shipping: "",
    });
  }
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="form-label">Select Product</label>
        <input
          className="form-input"
          name="selectProduct"
          type="text"
          value={form.selectProduct}
          onChange={handleChange}
        />
        <label className="form-label">Select Category</label>
        <select
          className="form-option"
          value={form.selectCategory}
          name="selectCategory"
          onChange={handleChange}
        >
          {options2.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <label className="form-label">Select Company</label>
        <select
          className="form-option"
          value={form.selectCompany}
          name="selectCompany"
          onChange={handleChange}
        >
          {options1.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <label className="form-label">Sort by</label>
        <select
          className="form-option"
          value={form.sortby}
          onChange={handleChange}
          name="sortby"
        >
          {options3.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <label className="form-label">Select Prize</label>
        <input
          type="range"
          value={form.selectPrize}
          name="selectPrize"
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label className="form-label">Free shipping</label>
        <input
          style={{ width: "20px", height: "20px" }}
          type="checkbox"
          value={form.shipping}
          name="shipping"
          onChange={handleChange}
        />
        <br />
        <button className="form-button login" type="submit">
          Login
        </button>
        <button className="form-button guest" type="submit">
          Reset
        </button>
      </form>
    </>
  );
};
export default FormSelect;
