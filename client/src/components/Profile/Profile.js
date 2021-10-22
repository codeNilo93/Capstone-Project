import styled from 'styled-components/macro'
import Klammerfisch from '../../assets/images/Klammerfisch.jpg'

function Profile() {
  return (
    <Wrapper>
      <h2>Profile Page</h2>
      <ProfileImg src={Klammerfisch} alt="That's me!" />
      <p>test</p>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.section`
  border: 1px solid red;
  text-align: center;
  margin: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const ProfileImg = styled.img`
  width: 10%;
  margin: auto;
`
