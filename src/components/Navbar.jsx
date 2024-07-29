import Search from "./Search";
import Logo from "./Logo";
import NumResult from "./NumResult"
const Navbar = () => {

  return (
    <>
      <nav className="nav-bar">
       <Logo/>
        <Search/>
        <NumResult/>
      </nav>
    </>
  );
};

export default Navbar;
