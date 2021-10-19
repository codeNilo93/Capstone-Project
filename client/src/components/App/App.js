import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import styled from "styled-components/macro";
import Header from "../Header/Header";
import Hello from "../Hello/Hello"
import Login from "../Login/Login";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

function App() {
  return (
    <Router>
      <Wrapper>
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
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.section`
  border: 1px solid red; Testing purposes
`;
