import styled from 'styled-components/macro'
import GoogleMapReact from 'google-map-react'

const AdventureMap = () => {

  const defaultCoordinates = { lat: 51.062896765257314, lng: 13.746083328789133}

  return (
    <Wrapper>
      <GoogleMapReact
      bootstrapURLKeys={ {key: 'AIzaSyB4EdJcZWuAd-WRizyMrMjsv3P0TGWIOt0' }}
      defaultCenter={defaultCoordinates}
      center={defaultCoordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={''}
      onChildClick={''}
      >
      </GoogleMapReact>
    </Wrapper>
  )
}

export default AdventureMap

const Wrapper = styled.section`
padding-top: 50px;
  border: 1px solid red;

`

const StyledMap = styled.section`

`
