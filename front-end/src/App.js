import "./App.css";
import { Switch, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";

import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  error: state.error,
});

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LogInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default connect(mapStateToProps, {})(App);
