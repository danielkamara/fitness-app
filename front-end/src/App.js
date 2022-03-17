import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
