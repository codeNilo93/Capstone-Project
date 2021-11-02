import styled from 'styled-components/macro'

function Header() {
  return (
    <Wrapper>
      <HeaderTitle>Adventure & Chill</HeaderTitle>
    </Wrapper>
  )
}

export default Header

const HeaderTitle = styled.h1`
  padding-top: 10px;
  text-align: center;
  margin: auto;
  color: white;
`

const Wrapper = styled.header`
  line-height: 20px;
  padding-bottom: 20px;
  width: 100%;
  border-bottom-right-radius: 50px 20px;
  border-bottom-left-radius: 50px 20px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #cb2d3e;
  position: fixed;
  z-index: 2;
  top: 0;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 50, 0.75);
`
