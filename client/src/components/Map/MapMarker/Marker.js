import styled from 'styled-components/macro'
import { useState } from 'react'
import RoomIcon from './RoomIcon.svg'

function MapMarker({
  imgUrl,
  title,
  description,
  lat,
  lng,
  category,
  street,
  zipcode,
  city,
}) {
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
          <FormGrid>
            <TitleWrapper>
              <StyledImage src={imgUrl} alt="image of location" />
              <h3>{title}</h3>
            </TitleWrapper>
            <TextWrapper>
              <StyledQuestion>What's up?</StyledQuestion>
              <p>{description}</p>
              <StyledQuestion>Where to?</StyledQuestion>
              <p>{street}</p>
              <p>
                {zipcode}, {city}
              </p>
            </TextWrapper>
          </FormGrid>
        </TextBlock>
      ) : null}
    </div>
  )
}

export default MapMarker

const StyledQuestion = styled.p`
  font-weight: bold;
`

const FormGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const TitleWrapper = styled.div``

const TextWrapper = styled.div`
  font-size: x-small;
`

const MapMarkerButton = styled.button`
  background: none;
  border: none;
`

const TextBlock = styled.div`
padding-top: 10px;
  text-align: center;
  margin: auto;
  z-index: 10;
  width: 250px;
  height: auto;
  background-color: white;
  border 5px outset #cb2d3e;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const StyledImage = styled.img`
  width: 100px;
  height: 200 px;
  margin: auto;
`
