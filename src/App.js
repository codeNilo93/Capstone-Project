
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div className="background__image">
    <div className="App">
      <header>
        <StyledText>
          Home Page
        </StyledText>
      </header>
    </div>
    </div>
  );
}

const StyledText = styled.p`
color: white;
`

export default App;
