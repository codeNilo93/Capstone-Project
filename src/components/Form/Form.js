import styled from 'styled-components'

function Form() {
  return (
    <form>

    <FormDiv>
    <label>Title</label><br/>
    <input type="text" id="fname" name="fname" value=""/><br/>
    </FormDiv>

    <FormDiv>
    <label>Description</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>
    </FormDiv>

    <FormDiv>
    <label>Coordinates</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>
    </FormDiv>

    <FormDiv>
    <label>Address</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>
    </FormDiv>

    <FormDiv>
    <label>Price</label><br/>
    <input type="text" id="lname" name="lname" value=""/><br/>
    </FormDiv>

    <FormSubmit type="submit" value="Submit"/>
    </form>
  


   
  )
}

const FormDiv = styled.div`
padding: 0.5rem 0;
`
const FormSubmit = styled.button`
padding: 0.5rem 0;
`
export default Form