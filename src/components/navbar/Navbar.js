import { Link } from "react-router-dom";
import { BsFillCartDashFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="Nav-comp">
      <img
        style={{ width: "50px", borderRadius: "50%" }}
        src = "https://media.istockphoto.com/id/621934650/photo/silhouettes-of-the-mountain-hills-at-sunset.jpg?s=1024x1024&w=is&k=20&c=YWrIYyklMubgDkPPSsx40T1Pidgc8AI4YBJmdJgav84="
        alt="logo"
      />
      <div className="nav-list">
        <p className="nav-item">
          <Link to="/">Home</Link>
        </p>
        <p className="nav-item">
          <Link to="/about">About</Link>
        </p>
        <p className="nav-item">
          <Link to="/store">Products</Link>
        </p>
        <p className="nav-item">
          <Link to="/cart">Cart</Link>
        </p>
      </div>
      <div className="nav-icons">
        <p style={{ fontSize: "30px" }}>
          <BsFillMoonFill />
        </p>
        <p style={{ fontSize: "30px", paddingRight:"30px" }}>
          <BsFillCartDashFill />
        </p>
      </div>
    </div>
  );
};
export default NavBar;
