import LogInForm from "../components/form/LogInForm";
import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <div>
      <h1>Login Page</h1>

      <LogInForm />
      <p>
        Not Registered??? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogInPage;
