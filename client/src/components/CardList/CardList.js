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

const StyledList = styled.ul`
position:absolute;
left:0;
right:0;
  width: auto;
  margin: auto;
  width: 100%;
  height: 50%;
  border-color: red;
`

const HomeScroll = styled.section`
border-color: red;
  overflow: scroll;
  padding: 10px;
  height: 25%;
  background-color: white;
  border: 2px solid white;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`
