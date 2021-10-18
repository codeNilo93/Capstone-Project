import styled from 'styled-components'

function Footer () {
    return (
        <footer>
            <FooterContainer>
                <FooterButton>
                Home
        
                </FooterButton>

                <FooterButton>
                Create

                </FooterButton>

                <FooterButton>
                Profile

                </FooterButton>
            </FooterContainer>
        </footer>
    )
}

const FooterContainer = styled.nav`
position: fixed;
bottom: 0px;
width: 100%;
height: 8%;
display: flex;
z-index: 2;
box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
-webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
-moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 50.75);
`;

const FooterButton = styled.button`
background-color: #FF9671;
flex: 25%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover  {
    border: 2px solid white;
    box-shadow: 10px 10px 10px 4px grey;
  }
`

export default Footer


