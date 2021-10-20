import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Wrapper>
      <h1>Adventure'n'Chill</h1>
        <StyledLink to="/profile">Profile</StyledLink>

        <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  background-color: #ff9671;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 50px;
  top: 0;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
  display: grid;
  grid-template-columns: auto 100px 100px;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
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
`;