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

const Marker = styled.section``
