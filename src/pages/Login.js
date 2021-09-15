import signinImage from "../components/assets/images/login.svg";
import Button from "../components/Button";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import classes from "../styles/Login.module.css";
export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration image={signinImage} alterName="signin" />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button>Signin</Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
