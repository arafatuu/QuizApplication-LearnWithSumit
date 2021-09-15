import { Link } from "react-router-dom";
import classNames from "../styles/Nav.module.css";
import Account from "./Account";
import logo from "./assets/images/logo-bg.png";
export default function Nav() {
  return (
    <nav className={classNames.nav}>
      <ul>
        <li>
          <Link to="/" className={classNames.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
