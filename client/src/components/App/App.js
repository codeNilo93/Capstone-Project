import styled from "styled-components/macro";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

function App() {
  return (
    <Wrapper>
      <Header />
      <Login />
      <Home />
      <Form />
      <Profile />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  border: 1px solid red;
`;
