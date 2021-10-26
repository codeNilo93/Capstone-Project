import styled from 'styled-components/macro'
import { nanoid } from 'nanoid'

function Form({ onCreateNewLocation }) {


  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
        title,
        description,
        coordinates,
        address,
        category,
    } = form.elements

    onCreateNewLocation({
        id: nanoid(),
        title: title.value,
        description: description.value,
        coordinates: coordinates.value,
        address: address.value,
        category: category.value,
      })
      form.reset()
    

  }
  return (
    <Wrapper>
      <FormMenu onSubmit={handleSubmit}>
        <label><InputField name="title" type="text" placeholder="Title" /></label>

        <label><InputField name="description" type="text" placeholder="Description" /></label>

        <label><InputField name="coordinates" type="text" placeholder="Coordinates" /></label>

        <label><InputField name="address" type="text" placeholder="Address" /></label>

        <label><InputField name="category" type="text" placeholder="Category" /></label>

        <SubmitButton>Submit</SubmitButton>
      </FormMenu>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.section`
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  width: auto;
  gap: 100px;
  width: auto;
`

const FormMenu = styled.form`
background-color: #D3E9F3;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const InputField = styled.input`
border: none; 
  width: 75%;
  height: auto;
  background-color: #BCCEA1;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const SubmitButton = styled.button`
margin: 0;
  margin-top: 10px;
  width: 37.5%;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 10px;
`
