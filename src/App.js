import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import AppoinmentHeader from "./Pages/AppoinmentHeader/AppoinmentHeader";
import Appoinment from "./Pages/Appoinment/Appoinment";
import Footer from "./Pages/Home/Shared/Footer/Footer";
import NavigationBar from "./Pages/Home/Shared/AppBar/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/home/appoinment">
            <Appoinment></Appoinment>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
