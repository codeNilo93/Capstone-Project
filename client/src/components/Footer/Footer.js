import styled from "styled-components/macro";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Wrapper>
        <StyledLink to="/home">Home</StyledLink>

        <StyledLink to="/form">Create</StyledLink>

        <StyledLink to="/adventure">AdventurePlan</StyledLink>
    </Wrapper>
  );
}

export default Footer;

const StyledLink = styled(Link)`
text-decoration: none;
background-color: #ff9671;
flex: 25%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover {
  border: 2px solid white;
  box-shadow: 10px 10px 10px 4px grey;
}
  }
`


const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 8%;
  display: flex;
  z-index: 2;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
`;

const FooterButton = styled.button`
text-decoration: none;
background-color: #ff9671;
flex: 25%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover {
  border: 2px solid white;
  box-shadow: 10px 10px 10px 4px grey;
}
  }
`;
