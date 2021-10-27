import styled from 'styled-components/macro'
import RoomIcon from './RoomIcon.svg'

function MapMarker() {
  return (
    <Marker>
      <img src={RoomIcon} alt="LULULU" />
    </Marker>
  )
}

export default MapMarker

const Marker = styled.div`
  border: 1px solid red;
`
