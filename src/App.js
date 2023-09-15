import "./App.css";
import LoginForm from "./components/loginform/LoginForm";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import SignUp from "./components/signup/Signup";
import About from "./components/navbar/About";
import Home from "./components/navbar/Home";
import Cart from "./components/navbar/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
