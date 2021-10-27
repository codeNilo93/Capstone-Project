import styled from 'styled-components/macro'
import RoomIcon from './RoomIcon.svg'

function MapMarker() {
  return (
    <Marker>
      <img src={RoomIcon} alt="marker" />
    </Marker>
  )
}

export default MapMarker

// This styling was done for testing purposes in case I dont see anything
const Marker = styled.div`
  border: 1px solid red;
`
