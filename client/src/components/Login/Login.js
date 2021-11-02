import styled from 'styled-components/macro'
import Klammerfisch from '../../assets/images/Klammerfisch.png'

function Login({ onLogin }) {
  const userData = [
    {
      username: 'FabianHanso',
      password: '123',
      firstname: 'Fabian',
    },
    {
      username: 'SaschaCollinet',
      password: '456',
      firstname: 'John',
    },
    {
      username: 'DaniloBraeuer',
      password: 'Password',
    },
    {
      username: 'VolkerMuehleib',
      password: 'Password',
    },
  ]

  function loginHandler(event) {
    event.preventDefault()
    const form = event.target
    const { username, password } = form.elements

    for (let i = 0; i < userData.length; i++) {
      if (
        username.value === userData[i].username &&
        password.value === userData[i].password
      ) {
        i = userData.length
        onLogin(username.value)
      } else {
        console.log('Fehler!')
      }
    }
    form.reset()
  }

  return (
    <Wrapper>
      <FormMenu onSubmit={loginHandler}>
        <h2>Ready for another adventure?</h2>
        <label htmlFor="username">
          <InputField
            type="text"
            placeholder="Vorname"
            required
            name="username"
          ></InputField>
        </label>
        <label htmlFor="Password">
          <InputField
            type="Password"
            placeholder="Passwort"
            required
            name="password"
          ></InputField>
        </label>
        <SubmitButton>Login</SubmitButton>
        <StyledText>powered by Neuefische</StyledText>
        <StyledFisch src={Klammerfisch} alt="klammerfisch" />
      </FormMenu>
    </Wrapper>
  )
}

export default Login

const StyledText = styled.p`
  font-size: xx-small;
`

const StyledFisch = styled.img`
height: 60%;
width 50%;
`

const Wrapper = styled.section`
  margin: auto;
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  width: auto;
  gap: 100px;
  width: auto;
`

const FormMenu = styled.form`
  background-color: #d3e9f3;
  padding: 20px;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const InputField = styled.input`
  font-size: xx-small;
  border: none;
  width: 75%;
  height: auto;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const SubmitButton = styled.button`
  background: transparent;
  border-radius: 50px;
  border: 2px outset #cb2d3e;
  color: #cb2d3e;
  margin: 0 1em;
  padding: 0.25em 1em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
