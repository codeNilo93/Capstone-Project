import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Wrapper>
      <HeaderTitle>Adventure'n'Chill</HeaderTitle>
      <StyledLink to="/profile">Profile</StyledLink>
    </Wrapper>
  )
}

export default Header

const HeaderTitle= styled.h1`
margin: auto;
padding-left: 40px;
`

const Wrapper = styled.header`
width: 100%;  
border-bottom-right-radius: 50px 20px;
border-bottom-left-radius: 50px  20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #FF6F91;
  position: fixed;
  z-index: 2;
  top: 0;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
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
