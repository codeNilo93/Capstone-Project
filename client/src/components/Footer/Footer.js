import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Wrapper>
      <StyledLink to="/home">Home</StyledLink>

      <StyledLink to="/form">Create Location</StyledLink>

      <StyledLink to="/adventure">AdventureMap</StyledLink>
    </Wrapper>
  )
}

export default Footer

const StyledLink = styled(Link)`
color: black;
  text-decoration: none;
  background-color: #FF6F91;
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

const Wrapper = styled.nav`
  border-radius: 5%;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  z-index: 2;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
`
