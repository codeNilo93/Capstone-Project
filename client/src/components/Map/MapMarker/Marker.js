import styled from 'styled-components/macro'
import RoomIcon from './RoomIcon.svg'

function MapMarker({ title, description }) {
  function openPopup(title, description) {
    console.log(title + description)
  }

  return (
    <Marker onClick={() => openPopup(title, description)}>
      <img src={RoomIcon} alt="marker" />
    </Marker>
  )
}

export default MapMarker

const Marker = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: red;

  img {
    width: 20px;
  }
`

// const
