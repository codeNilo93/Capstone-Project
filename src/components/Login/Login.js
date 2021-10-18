import styled from 'styled-components/macro';

function Login() {
  return (
      <StyledFormat>
          <LoginMenu>
            <StyledText>
              <h3>Welcome! Please Log In</h3>
              <label>User Name</label>
              <input type="text" id="lname" name="lname" value="" />
              <label>Password</label>
              <input type="password" id="password" name="password" value="" />
              <button type="button">Submit</button>
            </StyledText>
          </LoginMenu>
      </StyledFormat>
  );
}



const StyledFormat = styled.section`
text-align: center;
padding-top:350px;
width: auto;
`;

const StyledText = styled.p`
    padding-top: 10px;
  color: black;
`;

const LoginMenu = styled.form`
  opacity: 95%;
  text-align: center;
  background-color: white;
  width: 25%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-bottom:10px;
`;


export default Login;
