import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { userLogin } from "../../actions/actions";
import { useHistory } from "react-router";

const LogInForm = (props) => {
  const [user, setUser] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const history = useHistory();

  const handleInput = (e) => {
    e.preventDefault(e);

    if (e.target.id === "username") {
      setUser(e.target.value);
    }
    if (e.target.id === "password") {
      setUserPassword(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    console.log(user);

    e.preventDefault();
    props.userLogin({ username: user, password: userPassword });
    history.push("/home");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={handleInput}
            id="username"
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleInput}
            id="password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { userLogin })(LogInForm);
