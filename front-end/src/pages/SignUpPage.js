import SignUpForm from "../components/form/SignUpForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUpForm />
      <p>
        Already a user <Link to="/">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage;
