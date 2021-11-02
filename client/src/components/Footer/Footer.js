import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import AddCard from '../../assets/SVG/AddCard.svg'
import Home from '../../assets/SVG/Home.svg'
import AdventureMap from '../../assets/SVG/Map.svg'

function Footer() {
  return (
    <Nav>
      <StyledLinkLeft to="/home">
        <StyledText>
          <img src={Home} alt="Home" />
        </StyledText>
      </StyledLinkLeft>

      <StyledLink to="/form">
        <StyledText>
          <img src={AddCard} alt="form" />
        </StyledText>
      </StyledLink>

      <StyledLinkRight to="/adventure">
        <StyledText>
          <img src={AdventureMap} alt="map" />
        </StyledText>
      </StyledLinkRight>
    </Nav>
  )
}

export default Footer

const StyledText = styled.p`
  color: white;
`

const StyledLinkLeft = styled(Link)`
  border-top-left-radius: 50px 20px;
  color: black;
  text-decoration: none;
  background-color: #cb2d3e;
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
  background-color: #cb2d3e;
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
  background-color: #cb2d3e;
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
