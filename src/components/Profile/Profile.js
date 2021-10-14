import styled from 'styled-components';
import './Profile.css';

function Profile() {
  return (
    <div className="background__image">
    <div className="App">
      <header>
        <StyledText>
          Profile Page
        </StyledText>
      </header>
    </div>
    <p>lol</p>
    <p>lol</p>
    </div>
  );
}

const StyledText = styled.p`
color: white;
`

export default Profile;