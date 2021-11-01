import styled from 'styled-components/macro'
import Location from '../Location/Location'

function LocationList({ locations }) {
  return (
    <Section>
      <ul>
        {locations.map(location => (
          <Location
            key={location.id}
            image={location.image}
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
    </Section>
  )
}
export default LocationList

const Section = styled.section`
  overflow: scroll;
  padding-right: 20px;
  text-align: center;
  padding-top: 40px;
  max-width 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
