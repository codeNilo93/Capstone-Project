import styled from "styled-components";
import "./Login.css";

function Login() {
  return (
    <div className="login__background__image">
      <div className="Login">
        <section>
          <StyledLoginMenu>
            <StyledText>
              <h3>Welcome! Please Log In</h3>

              <label>User Name</label>
              <br />
              <input type="text" id="lname" name="lname" value="" />
              <br />

              <label>Password</label>
              <br />
              <input type="text" id="lname" name="lname" value="" />
              <br />
              <FormSubmit type="submit" value="Submit"/>
            </StyledText>
          </StyledLoginMenu>
        </section>
      </div>
    </div>
  );
}

const StyledText = styled.p`
    padding-top: 10px;
  color: black;
`;

const StyledLoginMenu = styled.div`
  opacity: 95%;
  text-align: center;
  background-color: white;
  width: 25%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-bottom:10px;
`;
const FormSubmit = styled.input`
padding: 0.5rem 0;

`;

export default Login;
