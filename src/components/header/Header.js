import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header-comp">
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </>
  );
};
export default Header;
