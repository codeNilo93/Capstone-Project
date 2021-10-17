
import styled from 'styled-components';

function App() {
  return (
    <StyledBackground>
    <AppDiv>
      <header>
        <StyledText>
          Home Page
        </StyledText>
      </header>
    </AppDiv>
    </StyledBackground>
  );
}

export default App;

const StyledText = styled.p`
color: white;
`

const AppDiv = styled.div`
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

