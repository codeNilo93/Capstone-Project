import styled from 'styled-components/macro'
import { useState } from 'react'
import RoomIcon from './RoomIcon.svg'

function MapMarker({ title, description, imgUrl }) {
  const [showDetails, setshowDetails] = useState(false)

  const openPopup = () => {
    setshowDetails(showDetails ? false : true)
  }

  return (
    <div>
      <MapMarkerButton>
        <img src={RoomIcon} alt="marker" onClick={openPopup} />
      </MapMarkerButton>
      {showDetails ? (
        <TextBlock>
          <StyledImage src={imgUrl} alt="image of location" />
          <h3>{title}</h3>
          <p>{description}</p>
        </TextBlock>
      ) : null}
    </div>
  )
}

export default MapMarker

const MapMarkerButton = styled.button`
  background: none;
  border: none;
`

const TextBlock = styled.div`
  text-align: center;
  margin: auto;
  z-index: 10;
  width: 150px;
  height: auto;
  background-color: white;
  border: 3px outset white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const StyledImage = styled.img`
  width: 100px;
  height: 200 px;
  margin: auto;
`
