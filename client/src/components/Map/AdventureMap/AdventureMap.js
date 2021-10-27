import styled from 'styled-components/macro'
import GoogleMapReact from 'google-map-react'
import MapMarker from '../MapMarker/Marker'

const mockData = [
  {
    name: 'Heide',
    location: [51.090623169567145, 13.77920843776576],
  },
  {
    name: 'TeamEscape',
    location: [51.066451565992246, 13.750510727142094],
  },

  {
    name: 'AdventureRooms',
    location: [51.06418428170392, 13.747564635576671],
  },
  {
    name: 'PalaisGarten',
    location: [51.060882352147104, 13.73595889418726],
  },
  {
    name: 'Paris',
    location: [48.856127, 2.346525],
  },
]

function AdventureMap({ locations }) {
  const Key = process.env.REACT_APP_GOOGLE_MAPS_KEY

  const defaultCoordinates = {
    lat: 51.062896765257314,
    lng: 13.746083328789133,
  }

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={process.env.REACT_APP_GOOGLE_MAPS_KEY}
        defaultCenter={defaultCoordinates}
        center={defaultCoordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >
        {locations.map(item => (
          <MapMarker lat={item.lat} lng={item.lng}></MapMarker>
        ))}
      </GoogleMapReact>
    </Wrapper>
  )
}

export default AdventureMap

const Wrapper = styled.section`
  padding-top: 55px;
  border: 1px solid red;
`
