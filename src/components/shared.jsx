import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import Resume from "./resume";
import Portfolio from "./portfolio";

const activeStyle = {
  fontweight: "bold",
  color: "red",
};

function NavLi(props) {
  return (
    <li>
      <NavLink
        to={props.to}
        style={({ isActive }) => (isActive ? activeStyle : null)}
      >
        {props.text}
      </NavLink>
    </li>
  );
}

function NavBar() {
  return (
    <div>
      <Router>
        <ul>
          <NavLi to="/" text="Home" />
          <NavLi to="/about" text="About" />
          <NavLi to="/resume" text="Resume" />
          <NavLi to="/portfolio" text="Portfolio" />
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}
export default NavBar;
