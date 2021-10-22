import styled from 'styled-components/macro'

function AdventureMap() {
  return (
    <Wrapper>
      <h2>Wanna see all Adventures at once? Fear not, I'll show you an interactive map soon :P </h2>
      <p>This box shall hold the map</p>
      <p>lol</p>
    </Wrapper>
  )
}

export default AdventureMap

const Wrapper = styled.section`
  height: auto;
  border: 1px solid red;
  text-align: center;
  margin: auto;
  padding-top: 200px;
  padding-bottom: 300px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
