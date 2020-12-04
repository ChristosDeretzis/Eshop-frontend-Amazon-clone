import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
