import { Link } from "react-router-dom";
import classes from "../styles/ProgressBar.module.css";

export default function ProgressBar() {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton}>
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div class={classes.rangeArea}>
        <div class={classes.tooltip}>24% Cimplete!</div>
        <div class={classes.rangeBody}>
          <div class={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/Result">
        <button class="button next">
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </button>
      </Link>
    </div>
  );
}
