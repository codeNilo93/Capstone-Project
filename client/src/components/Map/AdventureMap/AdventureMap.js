import styled from 'styled-components/macro'
import GoogleMapReact from 'google-map-react'
import MapMarker from '../MapMarker/Marker'
import { Paper, Typography } from '@material-ui/core'

function AdventureMap({ locations }) {
  const defaultCoordinates = {
    lat: 51.062896765257314,
    lng: 13.746083328789133,
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultCoordinates}
        center={defaultCoordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
        {locations.map((item, i) => (
          <MapMarker lat={item.lat} lng={item.lng} key={i}>
            <p>{item.name}</p>
          </MapMarker>
        ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default AdventureMap

const Wrapper = styled.section`
  width: 75%;
  padding-top: 55px;
  border: 1px solid red;
`
