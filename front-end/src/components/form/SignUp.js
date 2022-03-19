import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { userSignup } from "../../actions/actions";

const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    birthday: "",
  });

  const handleSubmit = (e) => {
    // console.log(user);
    e.preventDefault();
    props.userSignup(user);
    setUser({
      name: "",
      email: "",
      password: "",
      birthday: "",
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
          <Form.Text
            className="text-muted"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          ></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text
            className="text-muted"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="text" placeholder="Enter birthday" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default connect(null, { userSignup })(SignUp);
