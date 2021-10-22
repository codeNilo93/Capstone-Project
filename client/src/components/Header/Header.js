import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Wrapper>
      <HeaderTitle>Adventure'n'Chill</HeaderTitle>
      <StyledLink to="/profile">Profile</StyledLink>

      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  )
}

export default Header

const HeaderTitle= styled.h1`
margin: auto;
padding-left: 10px;
`

const Wrapper = styled.header`
  border-radius: 3%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #FF6F91;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  top: 0;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  display: grid;
  grid-template-columns: 200px 100px 100px;
  align-items: center;
  justify-content: center;
`

const StyledLink = styled(Link)`
margin: auto;
  text-decoration: none;
  background: transparent;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
`
