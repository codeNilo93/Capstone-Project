import styled from 'styled-components/macro';

function Profile() {
  return (
    <StyledBackground>
    <ProfileText>
        <StyledText>
          Profile Page
        </StyledText>
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


export default Profile;