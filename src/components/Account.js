import { Link } from "react-router-dom";
import classNames from "../styles/Account.module.css";
export default function Account() {
  return (
    <div className={classNames.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <Link to="/Signup">Signup</Link>
      <Link to="/Login">Login</Link>
      {
        //<!-- <span class="material-icons-outlined" title="Logout"> logout </span> -->
      }
    </div>
  );
}
