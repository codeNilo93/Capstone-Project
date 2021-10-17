import styled from 'styled-components/macro';

function Profile() {
  return (
    <StyledBackground>
    <ProfileText>
      <header>
        <StyledText>
          Profile Page
        </StyledText>
      </header>
    </ProfileText>
    <p>lol</p>
    <p>lol</p>
    </StyledBackground>
  );
}

const StyledText = styled.p`
color: white;
`;

const ProfileText = styled.div`
text-align: center;
padding-top:300px;
`;

const StyledBackground = styled.section`
`



export default Profile;