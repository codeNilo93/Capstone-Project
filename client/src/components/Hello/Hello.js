import styled from 'styled-components/macro';

function Hello() {
  return (
    <Wrapper>
<img src='https://files.slack.com/files-pri/TTHG21AH3-F02F4VD3WRL/klammerfisch.jpg'/>
    <p>lol</p>
    <p>lol</p>
    </Wrapper>
  );
}

export default Hello;

const Wrapper = styled.section`
height: auto;
border: 1px solid red;
text-align: center;
margin: auto;
padding-top:100px;
padding-bottom: 300px;
width: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;

`