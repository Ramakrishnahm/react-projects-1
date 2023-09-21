import { useState } from "react";
import { Link } from "react-router-dom";
const LoginForm = (input) => {
  const [login, setLogin] = useState({ password: "", email: "" });

  const handleChange = (ev) => {
    const { name, value } = ev && ev.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log(login);
    setLogin({ password: "", email: "" });
  }

  return (
    <>
      <div className="login-form">
        <h2 className="login-head">Login Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={login.email}
            onChange={handleChange}
          />
          <label className="form-label">Password:</label>
          <input
            className="form-input"
            name="password"
            type="password"
            value={login.password}
            onChange={handleChange}
          />

          <button className="form-button login" type="submit">
            Login
          </button>
          <button className="form-button guest" type="button">
            Guest User
          </button>
          <span className="span">
            Not a member yet? <Link to="/signup">Register</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
