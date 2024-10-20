import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";

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
      <ul>
        <NavLi to="/" text="Home" />
        <NavLi to="/about" text="About" />
        <NavLi to="/Resume" text="Resume" />
        <NavLi to="/Porfolio" text="Portfolio" />
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}
