import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "./ReactRouter/PrivateRoute";
import AuthButton from "./ReactRouter/AuthButton";
import ProtectedPage from "./containers/ProtectedPage";
import PublicPage from "./containers/PublicPage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <Router>
      <div>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/public" component={PublicPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
