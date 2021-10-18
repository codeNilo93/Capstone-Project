import styled from 'styled-components/macro';

function Login() {
  return (
    <Wrapper>
          <LoginMenu>
              <StyledFormat>Welcome! Please Log In</StyledFormat>
              <label>User Name</label>
              <input type="text" id="lname" name="lname" value="" />
              <label>Password</label>
              <input type="password" id="password" name="password" value="" />
              <LoginButton type="button">Submit</LoginButton>
          </LoginMenu>
      </Wrapper>
  );
}


const Wrapper = styled.section`
border: 1px solid red;
text-align: center;
padding-top:200px;
width: auto;
`;

const LoginMenu = styled.form`
  padding: 20px;
  opacity: 95%;
  text-align: center;
  background-color: white;
  width: 50%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-bottom:10px;
  display: flex;
  flex-flow: column wrap;
`;

const StyledFormat = styled.p`
    padding-top: 10px;
  color: black;
`;

const LoginButton =styled.button`
margin-top: 10px;
`



export default Login;
