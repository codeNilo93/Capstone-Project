import styled from 'styled-components/macro';

function About() {
  return (
    <Wrapper>
        <h2>
          Hello There! Are you ready for your next Adventure?
        </h2>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
padding-top: 50px;
border: 1px solid red;
text-align: center;
color: white;
`