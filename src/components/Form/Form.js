import styled from 'styled-components/macro';

function Form() {
  return (
      <Wrapper>

    <label>Title</label><br/>
    <input type="text" id="fname" name="fname" value=""/><br/>

    <label>Description</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>

    <label>Coordinates</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>

    <label>Address</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>

    <label>Price</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>

    <button type="button">Click Me!</button>

    </Wrapper>
   
  )
}

export default Form

const Wrapper = styled.section`
padding: 0.5rem 0;
border: 1px solid red;
`