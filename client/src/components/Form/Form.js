import styled from 'styled-components/macro'
import { nanoid } from 'nanoid'

function Form({ onCreateNewLocation }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const {
      title,
      description,
      lat,
      lng,
      street,
      zipcode,
      city,
      category,
      imgUrl,
    } = form.elements

    onCreateNewLocation({
      id: nanoid(),
      title: title.value,
      description: description.value,
      lat: lat.value,
      lng: lng.value,
      street: street.value,
      zipcode: zipcode.value,
      city: city.value,
      category: category.value,
      imgUrl: imgUrl.value,
    })
    form.reset()
  }
  return (
    <Wrapper>
      <FormMenu onSubmit={event => handleSubmit(event)}>
        <FormGrid>
          <label>
            <InputField name="title" type="text" placeholder="Title" />
          </label>

          <label>
            <InputField
              name="description"
              type="text"
              placeholder="Description"
            />
          </label>

          <label>
            <InputField name="lat" type="text" placeholder="latitude" />
          </label>
          <label>
            <InputField name="lng" type="text" placeholder="longitude" />
          </label>

          <label>
            <InputField name="street" type="text" placeholder="Street" />
          </label>
          <label>
            <InputField name="zipcode" type="text" placeholder="Zip Code" />
          </label>
          <label>
            <InputField name="city" type="text" placeholder="City" />
          </label>

          <label>
            <InputField name="category" type="text" placeholder="Category" />
          </label>
        </FormGrid>
        <label>
          <InputField
            type="text"
            name="imgUrl"
            id="imgUrl"
            placeholder="Enter img url.."
          />
        </label>

        <SubmitButton>Submit</SubmitButton>
      </FormMenu>
    </Wrapper>
  )
}

export default Form

const FormGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Wrapper = styled.section`
  padding-left 10px;
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  width: auto;
  margin: auto;
`

const FormMenu = styled.form`
  background-color: white;
  padding: 20px;
  border 5px outset #cb2d3e;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const InputField = styled.input`
  font-size: xx-small;
  border: none;
  width: 75%;
  height: auto;
  border outset #cb2d3e;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const SubmitButton = styled.button`
  background: white;
  border-radius: 50px;
  border: 2px outset #cb2d3e;
  color: #cb2d3e;
  margin: 0 1em;
  padding: 0.25em 1em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
