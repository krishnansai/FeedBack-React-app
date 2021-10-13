import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Forms from "./Forms";
// import Home from "./Home";
import Tables from "./Tables";

const App = () => {
  return (
    <div>
      <Router>
        <div className="d-flex">
          {/* <Link className="nav-link" to="/">Home</Link> */}
          <Link className="nav-link" to="/">Form</Link>
          <Link className="nav-link" to="table">Table</Link>
        </div>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Forms} />
          <Route exact path="/table" component={Tables} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
