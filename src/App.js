import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Main />
      <h1 className="featured-product">Featured Products</h1>
      <Products />
    </div>
  );
}

export default App;
