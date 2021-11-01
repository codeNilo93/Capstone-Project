import styled from 'styled-components/macro'
import { nanoid } from 'nanoid'
import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

function Form({ onCreateNewLocation }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { title, description, coordinates, address, category, image } =
      form.elements

    const [image, setImage] = useState('')

    function upload(event) {
      const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

      const formData = new FormData()
      formData.append('file', event.target.files[0])
      formData.append('upload_preset', PRESET)

      axios
        .post(url, formData, {
          headers: {
            'Content-type': 'multipart/form-data',
          },
        })
        .then(onImageSave)
        .catch(err => console.error(err))
    }

    function onImageSave(response) {
      setImage(response.data.url)
    }

    onCreateNewLocation({
      id: nanoid(),
      title: title.value,
      description: description.value,
      coordinates: coordinates.value,
      address: address.value,
      category: category.value,
      image: image.value,
    })
    form.reset()
  }
  return (
    <Wrapper>
      <FormMenu onSubmit={handleSubmit}>
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
            <InputField
              name="coordinates"
              type="text"
              placeholder="Coordinates"
            />
          </label>

          <label>
            <InputField name="address" type="text" placeholder="Address" />
          </label>

          <label>
            <InputField name="category" type="text" placeholder="Category" />
          </label>

          <label>
            <InputField
              type="text"
              name="imgUrl"
              id="imgUrl"
              placeholder="Enter img url.."
            />
          </label>
        </FormGrid>
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
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  width: auto;
  gap: 100px;
  width: auto;
`

const FormMenu = styled.form`
  background-color: #d3e9f3;
  padding: 20px;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const InputField = styled.input`
  font-size: xx-small;
  border: none;
  width: 75%;
  height: auto;
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
