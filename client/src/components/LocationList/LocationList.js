import styled from 'styled-components/macro'
import Location from '../Location/Location'

function LocationList({ locations }) {
  return (
    <WrapList>
      <ul>
        {locations.map(location => (
          <Location
            key={location.id}
            imgUrl={location.imgUrl}
            title={location.title}
            description={location.description}
            category={location.category}
            street={location.street}
            zipcode={location.zipcode}
            city={location.city}
            lat={location.lat}
            lng={location.lng}
          />
        ))}
      </ul>
    </WrapList>
  )
}
export default LocationList

const WrapList = styled.section`
  overflow: scroll;
  padding-right: 20px;
  text-align: center;
  padding-top: 40px;
  max-width 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
