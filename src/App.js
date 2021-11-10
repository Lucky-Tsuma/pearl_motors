import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
