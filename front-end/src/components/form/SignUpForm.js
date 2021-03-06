import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userSignup } from "../../actions/actions";

const SignUpForm = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  });

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.userSignup(user);
    setUser({
      name: "",
      email: "",
      password: "",
      birthday: "",
    });
    history.push("/home");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            className="text-muted"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <Form.Text></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            className="text-muted"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter birthday"
            placeholder="mm/dd/yyyy"
            value={user.birthday}
            onChange={(e) => setUser({ ...user, birthday: e.target.value })}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { userSignup })(SignUpForm);
