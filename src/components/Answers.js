import Checkbox from "../components/Checkbox";
import classes from "../styles/Answers.module.css";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Option 1" />
      <Checkbox className={classes.answer} text="Option 2" />
      <Checkbox className={classes.answer} text="Option 3" />
      <Checkbox className={classes.answer} text="Option 4" />
      <Checkbox className={classes.answer} text="Option 5" />
      <Checkbox className={classes.answer} text="Option 6" />
      <Checkbox className={classes.answer} text="Option 7" />
      <Checkbox className={classes.answer} text="Option 8" />
      <Checkbox className={classes.answer} text="Option 9" />
      <Checkbox className={classes.answer} text="Option 10" />
    </div>
  );
}
