import classes from "../styles/Illustration.module.css";
export default function Illustration({ image, alterName }) {
  return (
    <div class={classes.illustration}>
      <img src={image} alt={alterName} />
    </div>
  );
}
