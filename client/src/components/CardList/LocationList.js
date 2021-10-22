import styled from 'styled-components/macro'

import Location from '../Location/Location'

function LocationList({locations}) {
  return (
    <Wrapper>
        <ul>
          {locations.map(location => (
            <Location
              image={location.image}
              title={location.title}
              description={location.description}
              category={location.category}
            />
          ))}
        </ul>
    </Wrapper>
  )
}

export default LocationList

const Wrapper = styled.section`
overflow: scroll;
height: auto;
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  max-width 600px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`
