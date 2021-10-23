import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Nav>
      <StyledLinkLeft to="/home">Home</StyledLinkLeft>

      <StyledLink to="/form">Create Location</StyledLink>

      <StyledLinkRight to="/adventure">AdventureMap</StyledLinkRight>
    </Nav>
  )
}

export default Footer

const StyledLinkLeft = styled(Link)`
border-top-left-radius: 50px 20px;
  color: black;
  text-decoration: none;
  background-color: #ff6f91;
  flex: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`

const StyledLinkRight = styled(Link)`
border-top-right-radius: 50px 20px;
  color: black;
  text-decoration: none;
  background-color: #ff6f91;
  flex: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`


const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  background-color: #ff6f91;
  flex: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`

const Nav = styled.nav`
width: 100%;
  border-top-right-radius: 50px 20px;
  border-top-left-radius: 50px 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  z-index: 2;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
`
