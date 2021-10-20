import styled from 'styled-components/macro';
import Klammerfisch from '../../assets/images/Klammerfisch.jpg'

function Profile() {
  return (
    <Wrapper>
        <h2>
          Profile Page
        </h2>
        <ProfileImg src={Klammerfisch} alt="That's me!"/>
    <p>lol</p>
    <p>lol</p>
    </Wrapper>
  );
}

export default Profile;

const Wrapper = styled.section`
height: auto;
border: 1px solid red;
text-align: center;
margin: auto;
padding-top:100px;
padding-bottom: 300px;
width: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

const ProfileImg = styled.img`
width: 10%;
margin: auto;
`
