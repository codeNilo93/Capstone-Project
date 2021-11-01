import styled from 'styled-components/macro'
import RoomIcon from './RoomIcon.svg'

function MapMarker({ title, description, image }) {
  function openPopup(title, description) {
    console.log(title + description)
  }

  return (
    <Marker onClick={() => openPopup(title, description)}>
      <img src={RoomIcon} alt="marker" />
      <img src={image} />
      <p>{title}</p>
      <p>{description}</p>
    </Marker>
  )
}

export default MapMarker

const Marker = styled.div`
  cursor: pointer;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 3px outset white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  img {
    width: 20px;
  }
`

// const
