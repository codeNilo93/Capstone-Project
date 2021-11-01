import styled from 'styled-components/macro'
import { useState } from 'react'
import RoomIcon from './RoomIcon.svg'
import { css } from 'styled-components'

function MapMarker({ title, description, image }) {
  const [showDetails, setshowDetails] = useState(false)

  const openPopup = () => {
    setshowDetails(showDetails ? false : true)
  }

  const [FadeIn, SetFadeIn] = useState(false)

  return (
    <div>
      <button onClick={openPopup}>{showDetails ? 'less' : 'more'}</button>
      {showDetails ? (
        <TextBlock>
          <StyledImage src={image} alt="image of location" />
          <h3>{title}</h3>
          <p>{description}</p>
        </TextBlock>
      ) : null}
    </div>
  )
}

export default MapMarker

const TextBlock = styled.div`
  z-index: -1;
  width: 150px;
  height: auto;
  background-color: white;
  border: 3px outset white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  ${({ FadeIn }) =>
    FadeIn &&
    css`
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-name: fadeIn;
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}
`

const StyledImage = styled.img`
  width: 100px;
  height: 200 px;
  margin: 0;
`
