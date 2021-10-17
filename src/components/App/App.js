import styled from 'styled-components/macro';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Home from '../Home/Home';
import Form from '../Form/Form';
import Footer from '../Footer/Footer'

function App() {
  return (
    <wrapper>
    <Header />
    <Login />
    <Home />
    <Form />
    <Footer />
    </wrapper>

  );
}

export default App;

const AppStyledText = styled.p`
color: white;
text-align: center;
padding-top:300px;
`

const StyledBackground = styled.div`
padding-top: 120px;
background-image: linear-gradient(to right top, #ffc75f, #ffbd61, #ffb363, #ffaa67, #ffa16b, #ff9a6e, #ff9372, #ff8c76, #ff847b, #ff7d81, #ff7689, #ff6f91);
background-size: cover;
background-position:  center;
Background-repeat: no-repeat;
`

