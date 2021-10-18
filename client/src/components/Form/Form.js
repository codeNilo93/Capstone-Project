import styled from "styled-components/macro";

function Form() {
  return (
    <Wrapper>
      <FormMenu>
        <label>Title</label>
        <br />
        <input type="text" id="fname" name="fname" />

        <label>Description</label>
        <br />
        <input type="text" id="description" name="description" />

        <label>Coordinates</label>
        <br />
        <input type="text" id="coordinates" name="coordinates" />

        <label>Address</label>
        <br />
        <input type="text" id="address" name="address" />

        <label>Price</label>
        <br />
        <input type="text" id="price" name="price" />

        <button type="button">Click Me!</button>
      </FormMenu>
    </Wrapper>
  );
}

export default Form;

const Wrapper = styled.section`
  border: 1px solid red;
  text-align: center;
  padding-top: 200px;
  width: auto;
`;

const FormMenu = styled.section`
  padding: 20px;
  background-color: white;
  display: flex;
  flex-flow: column wrap;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
