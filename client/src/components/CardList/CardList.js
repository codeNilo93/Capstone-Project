import styled from 'styled-components/macro'

import Card from '../Card/Card'

function CardList({locations}) {
  return (
    <Wrapper>
        <ul>
          {locations.map(location => (
            <Card
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

export default CardList

const Wrapper = styled.section`
  border: 1px solid red;
  padding-right: 20px;
  text-align: center;
  padding-top: 60px;
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
`
