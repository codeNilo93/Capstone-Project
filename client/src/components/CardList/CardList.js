import styled from 'styled-components/macro'

import Card from '../Card/Card'

function CardList({locations}) {
  return (
    <Wrapper>
      <h2>List of Locations</h2>
      <p>Welcome back, Here is your list of locations:</p>
      <HomeScroll>
        <ul>
          {locations.map(location => (
            <Card
              title={location.title}
              description={location.description}
              category={location.category}
            />
          ))}
        </ul>
      </HomeScroll>
    </Wrapper>
  )
}

export default CardList

const Wrapper = styled.section`
  height: auto;
  border: 1px solid red;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 250px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
`

const HomeMap = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  width: 98%;
  height: 200px;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`

const HomeScroll = styled.section`
  overflow: scroll;
  padding: 20px;
  width: auto;
  height: 200px;
  background-color: white;
  border: 2px solid white;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
