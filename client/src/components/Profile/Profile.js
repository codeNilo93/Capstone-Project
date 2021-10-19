import styled from 'styled-components/macro';

function Profile() {
  return (
    <Wrapper>
        <h2>
          Profile Page
        </h2>
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

`