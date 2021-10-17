import styled from "styled-components";

function Login() {
  return (
    <StyledBackground>
      <StyledFormat>
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
      </StyledFormat>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
padding-top: 120px;
background-image: linear-gradient(to right top, #ffc75f, #ffbd61, #ffb363, #ffaa67, #ffa16b, #ff9a6e, #ff9372, #ff8c76, #ff847b, #ff7d81, #ff7689, #ff6f91);
background-size: cover;
background-position:  center;
Background-repeat: no-repeat;
height: auto;
`;

const StyledFormat = styled.div`
text-align: center;
padding-top:350px;
width: auto;
`;



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
