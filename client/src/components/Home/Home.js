import styled from "styled-components/macro";

function Home() {
  return (
    <Wrapper>
      <HomeTitle>AppDiv</HomeTitle>
      <HomeMenu>MapInterface</HomeMenu>
      <HomeMenu>CardInformation</HomeMenu>
      <HomeMenu>CardScroll</HomeMenu>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.section`
height: auto;
border: 1px solid red;
text-align: center;
margin: auto;
padding-top: 100px;
padding-bottom: 250px;
width: auto;
display: flex;
flex-flow: column wrap;
justify-content: space-between;
margin: 50px;
`;

const HomeTitle = styled.h1`
  color: white;
`;

const HomeMenu = styled.section`
  padding: 20px;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

