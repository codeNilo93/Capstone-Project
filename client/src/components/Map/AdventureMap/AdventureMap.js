import styled from 'styled-components/macro'
import GoogleMapReact from 'google-map-react'
import MapMarker from '../MapMarker/Marker'

function AdventureMap({ locations }) {
  const defaultCoordinates = {
    lat: 51.062896765257314,
    lng: 13.746083328789133,
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBtEjbk4zmwhczMADt1vTQ7uB3X0urmeik' }}
        defaultCenter={defaultCoordinates}
        center={defaultCoordinates}
        defaultZoom={14}
        options={''}
        onChange={''}
        onChildClick={''}
      >
        {locations.map((item, i) => (
          <MapMarker
            lat={item.lat}
            lng={item.lng}
            key={i}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
            street={item.street}
            zipcode={item.zipcode}
            city={item.city}
          ></MapMarker>
        ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default AdventureMap

const Wrapper = styled.section`
  padding-top: 55px;
`
