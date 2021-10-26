import styled from 'styled-components/macro'
import GoogleMapReact from 'google-map-react'

const AdventureMap = () => {

  const Key = process.env.REACT_APP_GOOGLE_MAPS_KEY

  const defaultCoordinates = { lat: 51.062896765257314, lng: 13.746083328789133}
  
  return (
    <Wrapper>
      <GoogleMapReact
      bootstrapURLKeys={ {Key} }
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
padding-top: 55px;
  border: 1px solid red;

`