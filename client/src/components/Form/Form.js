import styled from "styled-components/macro";

function Form() {
  return (
    <Wrapper>
      <FormMenu>
      <InputField type="text" placeholder="Title" />

      <InputField type="text" placeholder="Description" />

      <InputField type="text" placeholder="Coordinates" />

      <InputField type="text" placeholder="Address" />

      <InputField type="text" placeholder="Price" />

      <SubmitButton type="submit">Submit</SubmitButton>
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
  text-align: center;
  flex-flow: column wrap;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const InputField = styled.input `
    box-sizing: border-box;
    border: none;
    width: 75%;
    height: auto;
    background-color: BCCEA1;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 20px 30px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const SubmitButton =styled.button`
margin-top: 10px;
width: 37.5%;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
rgba(0, 0, 0, 0.22) 0px 15px 12px;
padding: 10px;
`
