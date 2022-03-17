import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { useEffect } from "react";
import { userLogin } from "./actions/actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

function App(props) {
  useEffect(() => {
    props.userLogin();
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, { userLogin })(App);
