import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Form from "../Form/Form";
import AdventurePlanner from "../AdventurePlanner/AdventurePlanner";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

function App() {
  return (
    <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/adventure">
            <AdventurePlanner />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
