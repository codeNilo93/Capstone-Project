import styled from 'styled-components/macro';


function Login() {
  return (
    <Wrapper>
          <LoginMenu>
              <LoginFormat>Welcome! Please log in</LoginFormat>
              <InputField type="text" placeholder="Username" />
              <InputField type="text" placeholder="Password" />
              <LoginButton type="submit">Log in</LoginButton>
          </LoginMenu>
      </Wrapper>
  );
}

export default Login;

const Wrapper = styled.section`
height: auto;
border: 1px solid red;
text-align: center;
margin: auto;
padding-top:200px;
padding-bottom: 200px;
width: auto;
`;

const LoginMenu = styled.form`
  margin: auto;
  padding: 20px;
  opacity: 95%;
  text-align: center;
  background-color: white;
  width: 75%;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding-bottom:10px;
  display: flex;
  flex-flow: column wrap;
`;

const LoginFormat = styled.p`
    padding-top: 10px;
  color: black;
`;

const LoginButton =styled.button`
margin-top: 10px;
width: auto;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
rgba(0, 0, 0, 0.22) 0px 15px 12px;
padding: 10px;
color: #f2936d;
`

const InputField = styled.input `
box-sizing: border-box;
border: none;
width: auto;
height: auto;
background-color: BCCEA1;
border-radius: 20px;
margin-bottom: 20px;
padding: 20px 30px;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

