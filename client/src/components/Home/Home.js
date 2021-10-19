import styled from "styled-components/macro";

function Home() {
  return (
    <Wrapper>
      <HomeTitle>AppDiv</HomeTitle>
      <HomeMenu>Placeholder</HomeMenu>
      <HomeMenu>Placeholder</HomeMenu>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.section`
  
  color: white;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid red;
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
